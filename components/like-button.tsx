"use client";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useAuth, useClerk } from "@clerk/nextjs";
import { toast } from "sonner";

export const LikeButton = ({ slug }: { slug: string }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isToggling, setIsToggling] = useState(false);
  const { userId } = useAuth();
  const { openSignIn } = useClerk();

  useEffect(() => {
    fetch(`/api/like?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLiked(!!data.isLiked);
        setLikeCount(data.likeCount ?? 0);
      })
      .catch((err) => {
        console.error("Failed to fetch like status:", err);
      });
  }, [slug]);

  const handleClick = async () => {
    if (!userId) {
      await openSignIn();
      return;
    }

    // Prevent rapid clicks
    if (isToggling) return;
    setIsToggling(true);

    // Optimistic update — instant feedback
    const prevLiked = isLiked;
    const prevCount = likeCount;
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? Math.max(0, likeCount - 1) : likeCount + 1);

    try {
      const response = await fetch(`/api/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });

      if (!response.ok) {
        // Rollback on failure
        setIsLiked(prevLiked);
        setLikeCount(prevCount);
        toast.error("Failed to like the post");
        return;
      }

      // Use the authoritative server state
      const data = await response.json();
      setIsLiked(data.isLiked);
      setLikeCount(data.likeCount);
    } catch {
      // Rollback on error
      setIsLiked(prevLiked);
      setLikeCount(prevCount);
      toast.error("Failed to like the post");
    } finally {
      setIsToggling(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleClick}
      disabled={isToggling}
    >
      {isLiked ? (
        <Heart className="mr-1 fill-red-500 text-red-500" />
      ) : (
        <Heart className="mr-1" />
      )}{" "}
      {likeCount}
    </Button>
  );
};
