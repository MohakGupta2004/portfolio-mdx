"use client";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useAuth, useClerk } from "@clerk/nextjs";
import { toast } from "sonner";

export const LikeButton = ({ slug }: { slug: string }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const { userId } = useAuth();
  const { openSignIn } = useClerk();
  const { getToken } = useAuth();
  useEffect(() => {
    fetch(`/api/like?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLiked(data.isLiked);
        setLikeCount(data.likeCount);
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
    const token = await getToken();
    const response = await fetch(`/api/like`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ slug }),
    });
    if (!response.ok) {
      toast.error("Failed to like the post");
      return;
    }
    setIsLiked(!isLiked);
    fetch(`/api/like?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setLikeCount(data.likeCount);
      })
      .catch((err) => {
        console.error("Failed to fetch like count:", err);
      });
  };

  return (
    <Button variant="outline" size="sm" onClick={handleClick}>
      {isLiked ? (
        <Heart className="mr-1 fill-red-500 text-red-500" />
      ) : (
        <Heart className="mr-1" />
      )}{" "}
      {likeCount}
    </Button>
  );
};
