import { Blog, Comment } from "@/lib/models";
import { syncUser } from "@/lib/sync-user";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { User } from "@/lib/models";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

// Ensure MongoDB connection
await connectDB();

// Helper function to build nested comment structure
function buildCommentTree(comments: any[]) {
  const commentMap = new Map();
  const roots: any[] = [];

  // First pass: create a map of all comments
  comments.forEach((comment) => {
    commentMap.set(comment.id, {
      ...comment,
      replies: [],
    });
  });

  // Second pass: build the tree structure
  comments.forEach((comment) => {
    const commentNode = commentMap.get(comment.id);
    if (comment.parentId) {
      const parent = commentMap.get(comment.parentId);
      if (parent) {
        parent.replies.push(commentNode);
      }
    } else {
      roots.push(commentNode);
    }
  });

  return roots;
}

export async function POST(request: NextRequest) {
  const { slug, content, parentId } = await request.json();
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const blog = await Blog.findOne({
    name: slug,
  });
  console.log("Blog found:", blog);
  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }
  console.log("User ID from auth:", userId);

  // Get Clerk user data and sync to database
  const clerk = await clerkClient();
  const clerkUser = await clerk.users.getUser(userId);
  const user = await syncUser(
    userId,
    clerkUser.emailAddresses[0]?.emailAddress || "",
    clerkUser.firstName || clerkUser.username || undefined,
    clerkUser.imageUrl || undefined,
  );
  const comment = new Comment({
    userId: user._id,
    blogId: blog._id,
    content,
    parentId: parentId || null,
    reactions: {
      upvote: 0,
      downvote: 0,
      rocket: 0,
      heart: 0,
    },
    userReactions: new Map(),
  });
  await comment.save();

  return NextResponse.json({ success: true, comment }, { status: 200 });
}

export async function GET(request: NextRequest) {
  const { slug } = Object.fromEntries(request.nextUrl.searchParams.entries());
  const { userId } = await auth();
  const result = await Blog.findOne({ name: slug });
  if (!result) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  const comments = await Comment.find({ blogId: result._id })
    .populate("userId", "clerkId name email avatarUrl")
    .sort({ createdAt: -1 });

  const responseComments = comments.map((comment) => {
    const userEmail = (comment.userId as any).email || "";
    const username = userEmail.split("@")[0] || "";

    // Get the current user's reactions from the per-user map
    const currentUserReactions = userId
      ? (comment.userReactions?.get(userId) || [])
      : [];

    return {
      id: comment._id.toString(),
      text: comment.content,
      parentId: comment.parentId?.toString(),
      user: {
        id: (comment.userId as any)._id.toString(),
        clerkId: (comment.userId as any).clerkId,
        fullName: (comment.userId as any).name || "Anonymous",
        username: username,
        avatarUrl: (comment.userId as any).avatarUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${(comment.userId as any).name || "User"}`,
        userProfile: "",
      },
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
      actions: {
        upvote: comment.reactions?.upvote || 0,
        downvote: comment.reactions?.downvote || 0,
        rocket: comment.reactions?.rocket || 0,
        heart: comment.reactions?.heart || 0,
      },
      selectedActions: currentUserReactions,
      replies: [],
    };
  });

  // Build nested structure
  const nestedComments = buildCommentTree(responseComments);

  return NextResponse.json({ comments: nestedComments }, { status: 200 });
}

export async function PATCH(request: NextRequest) {
  const { commentId, action } = await request.json();
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const comment = await Comment.findById(commentId);
  if (!comment) {
    return NextResponse.json({ error: "Comment not found" }, { status: 404 });
  }

  const validActions = ["upvote", "downvote", "rocket", "heart"];
  if (!validActions.includes(action)) {
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  }

  // Initialize userReactions map if it doesn't exist
  if (!comment.userReactions) {
    comment.userReactions = new Map();
  }

  // Get the current user's reactions
  const userActions = comment.userReactions.get(userId) || [];
  const actionIndex = userActions.indexOf(action);

  if (actionIndex > -1) {
    // Remove reaction for this user
    userActions.splice(actionIndex, 1);
    comment.reactions[action as keyof typeof comment.reactions] = Math.max(
      0,
      comment.reactions[action as keyof typeof comment.reactions] - 1,
    );
  } else {
    // Upvote and downvote are mutually exclusive
    const opposite = action === "upvote" ? "downvote" : action === "downvote" ? "upvote" : null;
    if (opposite) {
      const oppositeIndex = userActions.indexOf(opposite);
      if (oppositeIndex > -1) {
        userActions.splice(oppositeIndex, 1);
        comment.reactions[opposite as keyof typeof comment.reactions] = Math.max(
          0,
          comment.reactions[opposite as keyof typeof comment.reactions] - 1,
        );
      }
    }

    // Add reaction for this user
    userActions.push(action);
    comment.reactions[action as keyof typeof comment.reactions] += 1;
  }

  comment.userReactions.set(userId, userActions);
  comment.markModified('userReactions');
  await comment.save();

  return NextResponse.json({ success: true, comment }, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const { commentId } = await request.json();
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const user = await User.findOne({ clerkId: userId });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const comment = await Comment.findById(commentId);
  if (!comment) {
    return NextResponse.json({ error: "Comment not found" }, { status: 404 });
  }

  // Check if the user owns the comment
  if (comment.userId.toString() !== user._id.toString()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  // Delete the comment and all its replies
  await Comment.deleteMany({
    $or: [{ _id: commentId }, { parentId: commentId }],
  });

  return NextResponse.json({ success: true }, { status: 200 });
}
