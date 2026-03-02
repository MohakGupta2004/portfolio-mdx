import { Blog, Like, User } from "@/lib/models";
import { connectDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { syncUser } from "@/lib/sync-user";
const mongoose = await connectDB();
export async function POST(request: NextRequest) {
  const { slug } = await request.json();
  const token = request.headers.get("Authorization")?.split(" ")[1];
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
  );
  const session = await mongoose.startSession();
  await session.withTransaction(async () => {
    const isLiked = await Like.findOne({
      userId: user._id,
      blogId: blog._id,
    });
    if (isLiked) {
      await Like.deleteOne({
        userId: user._id,
        blogId: blog._id,
      });
      blog.likeCount = Math.max(0, blog.likeCount - 1);
    } else {
      const like = new Like({
        userId: user._id,
        blogId: blog._id,
      });
      await like.save();
      blog.likeCount += 1;
    }
    await blog.save();
  });
  await session.endSession();

  return NextResponse.json({ success: true }, { status: 200 });
}

export async function GET(request: NextRequest) {
  const { slug } = Object.fromEntries(request.nextUrl.searchParams.entries());
  const { userId } = await auth();
  const result = await Blog.findOne({ name: slug });
  if (!result) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }
  const user = await User.findOne({ clerkId: userId });
  const isLiked = await Like.findOne({
    userId: user ? user._id : null,
    blogId: result._id,
  });
  return NextResponse.json(
    { isLiked: isLiked, likeCount: result.likeCount },
    { status: 200 },
  );
}
