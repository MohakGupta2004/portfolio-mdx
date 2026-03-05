import { Blog, Like, User } from "@/lib/models";
import { connectDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

await connectDB();

export async function POST(request: NextRequest) {
  const { slug } = await request.json();
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // Look up user directly — they should already be synced from sign-in
  const user = await User.findOne({ clerkId: userId }).lean();
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const blog = await Blog.findOne({ name: slug });
  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  // Toggle like without transactions — use atomic operations
  const existingLike = await Like.findOne({
    userId: user._id,
    blogId: blog._id,
  });

  let isLiked: boolean;
  let likeCount: number;

  if (existingLike) {
    await Like.deleteOne({ _id: existingLike._id });
    const updated = await Blog.findByIdAndUpdate(
      blog._id,
      { $inc: { likeCount: -1 } },
      { new: true },
    );
    isLiked = false;
    likeCount = Math.max(0, updated?.likeCount ?? 0);
  } else {
    await Like.create({ userId: user._id, blogId: blog._id });
    const updated = await Blog.findByIdAndUpdate(
      blog._id,
      { $inc: { likeCount: 1 } },
      { new: true },
    );
    isLiked = true;
    likeCount = updated?.likeCount ?? 0;
  }

  // Return the new state so the frontend doesn't need a second GET
  return NextResponse.json({ success: true, isLiked, likeCount }, { status: 200 });
}

export async function GET(request: NextRequest) {
  const { slug } = Object.fromEntries(request.nextUrl.searchParams.entries());
  const { userId } = await auth();

  const result = await Blog.findOne({ name: slug }).lean();
  if (!result) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  let isLiked = false;
  if (userId) {
    const user = await User.findOne({ clerkId: userId }).lean();
    if (user) {
      const like = await Like.findOne({
        userId: user._id,
        blogId: result._id,
      }).lean();
      isLiked = !!like;
    }
  }

  return NextResponse.json(
    { isLiked, likeCount: (result as any).likeCount ?? 0 },
    { status: 200 },
  );
}
