import { User } from "@/lib/models";
import { connectDB } from "@/lib/mongodb";

export async function syncUser(clerkId: string, email: string, name?: string, avatarUrl?: string) {
  await connectDB();

  const user = await User.findOneAndUpdate(
    { clerkId },
    {
      clerkId,
      email,
      ...(name && { name }),
      ...(avatarUrl && { avatarUrl }),
    },
    { upsert: true, new: true },
  );

  return user;
}
