"use client";

import { useState, useEffect } from "react";
import { SignInButton, useUser } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

import {
  Heart,
  MessageCircle,
  Rocket,
  ThumbsUp,
  ThumbsDown,
  Trash2,
  Reply,
  Send,
  MoreVertical,
} from "lucide-react";

interface CommentSectionProps {
  slug: string;
}

interface CommentUser {
  id: string;
  clerkId: string;
  fullName: string;
  username: string;
  avatarUrl: string;
}

interface CommentData {
  id: string;
  text: string;
  user: CommentUser;
  createdAt: string;
  updatedAt: string;
  actions: {
    upvote: number;
    downvote: number;
    rocket: number;
    heart: number;
  };
  selectedActions: string[];
  replies: CommentData[];
}

function UserAvatar({
  src,
  alt,
  size = "md",
}: {
  src: string;
  alt: string;
  size?: "sm" | "md";
}) {
  const dims = size === "sm" ? "h-7 w-7" : "h-10 w-10";
  const textSize = size === "sm" ? "text-[10px]" : "text-sm";
  const [imgError, setImgError] = useState(false);

  const initials = (alt || "U")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  if (imgError || !src) {
    return (
      <div
        className={cn(
          dims,
          textSize,
          "shrink-0 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center font-semibold text-white select-none ring-2 ring-background shadow-sm",
        )}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        dims,
        "shrink-0 rounded-full object-cover bg-muted ring-2 ring-background shadow-sm",
      )}
      onError={() => setImgError(true)}
    />
  );
}

export default function CommentSection({ slug }: CommentSectionProps) {
  const { user, isLoaded } = useUser();

  const [comments, setComments] = useState<CommentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);
  // Track in-flight reactions to prevent double-clicks
  const [reactingSet, setReactingSet] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (slug) loadComments();
  }, [slug]);

  const loadComments = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`/api/comment?slug=${slug}`);
      const data = await res.json();

      if (res.ok) setComments(data.comments || []);
      else toast.error("Failed to load comments");
    } catch {
      toast.error("Error loading comments");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddComment = async (
    content: string,
    parentId: string | null = null,
  ) => {
    if (!content.trim()) return toast.error("Comment cannot be empty");

    try {
      const res = await fetch("/api/comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, content, parentId }),
      });

      if (res.ok) {
        setNewComment("");
        setReplyTo(null);
        await loadComments();
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to post comment");
      }
    } catch {
      toast.error("Error posting comment");
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    try {
      const res = await fetch("/api/comment", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ commentId }),
      });

      if (res.ok) await loadComments();
      else toast.error("Failed to delete comment");
    } catch {
      toast.error("Error deleting comment");
    }
  };

  // Helper to update a comment's reaction state in the nested tree
  const updateCommentReaction = (
    commentList: CommentData[],
    commentId: string,
    action: string,
    isAdding: boolean,
  ): CommentData[] => {
    return commentList.map((c) => {
      if (c.id === commentId) {
        let newSelectedActions = [...(c.selectedActions || [])];
        const newActions = { ...c.actions };

        if (isAdding) {
          // Remove the opposite reaction if upvote/downvote
          const opposite =
            action === "upvote"
              ? "downvote"
              : action === "downvote"
                ? "upvote"
                : null;
          if (opposite && newSelectedActions.includes(opposite)) {
            newSelectedActions = newSelectedActions.filter(
              (a) => a !== opposite,
            );
            newActions[opposite as keyof typeof newActions] = Math.max(
              0,
              (newActions[opposite as keyof typeof newActions] || 0) - 1,
            );
          }
          newSelectedActions.push(action);
          newActions[action as keyof typeof newActions] =
            (newActions[action as keyof typeof newActions] || 0) + 1;
        } else {
          newSelectedActions = newSelectedActions.filter((a) => a !== action);
          newActions[action as keyof typeof newActions] = Math.max(
            0,
            (newActions[action as keyof typeof newActions] || 0) - 1,
          );
        }

        return {
          ...c,
          actions: newActions,
          selectedActions: newSelectedActions,
        };
      }
      if (c.replies?.length > 0) {
        return {
          ...c,
          replies: updateCommentReaction(
            c.replies,
            commentId,
            action,
            isAdding,
          ),
        };
      }
      return c;
    });
  };

  const handleReaction = async (commentId: string, action: string) => {
    // Prevent double-clicks while a reaction is in-flight
    const reactionKey = `${commentId}:${action}`;
    if (reactingSet.has(reactionKey)) return;

    // Find the comment to determine if we're adding or removing
    const findComment = (list: CommentData[]): CommentData | undefined => {
      for (const c of list) {
        if (c.id === commentId) return c;
        if (c.replies?.length) {
          const found = findComment(c.replies);
          if (found) return found;
        }
      }
      return undefined;
    };

    const comment = findComment(comments);
    if (!comment) return;

    const isCurrentlyActive = comment.selectedActions?.includes(action);
    const isAdding = !isCurrentlyActive;

    // Optimistic UI update — instant feedback
    setComments((prev) =>
      updateCommentReaction(prev, commentId, action, isAdding),
    );

    // Block further clicks on this reaction
    setReactingSet((prev) => new Set(prev).add(reactionKey));

    try {
      const res = await fetch("/api/comment", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ commentId, action }),
      });

      if (!res.ok) {
        // Rollback optimistic update on failure
        setComments((prev) =>
          updateCommentReaction(prev, commentId, action, !isAdding),
        );
        toast.error("Failed to update reaction");
      }
    } catch {
      // Rollback on error
      setComments((prev) =>
        updateCommentReaction(prev, commentId, action, !isAdding),
      );
      toast.error("Error updating reaction");
    } finally {
      // Unblock this reaction
      setReactingSet((prev) => {
        const next = new Set(prev);
        next.delete(reactionKey);
        return next;
      });
    }
  };

  const ReactionButton = ({
    icon: Icon,
    count,
    active,
    activeColor,
    label,
    onClick,
  }: {
    icon: React.ElementType;
    count: number;
    active: boolean;
    activeColor: string;
    label: string;
    onClick: () => void;
  }) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          className={cn(
            "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200",
            "text-muted-foreground hover:text-foreground",
            "hover:bg-muted",
            active && activeColor,
            active && "bg-accent/60",
          )}
          onClick={onClick}
        >
          <Icon
            className={cn(
              "h-4 w-4 transition-all duration-200",
              active && "fill-current scale-110",
            )}
          />
          <span className="tabular-nums">{count}</span>
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="text-xs">
        {label}
      </TooltipContent>
    </Tooltip>
  );

  const CommentItem = ({
    comment,
    depth = 0,
  }: {
    comment: CommentData;
    depth?: number;
  }) => {
    const [localReplyText, setLocalReplyText] = useState("");
    const isOwner = user?.id === comment.user.clerkId;
    const canReply = depth < 3;
    const isEdited =
      comment.updatedAt &&
      comment.createdAt &&
      new Date(comment.updatedAt).getTime() -
        new Date(comment.createdAt).getTime() >
        1000;

    return (
      <div
        className={cn(
          "group/comment relative",
          depth > 0 &&
            "ml-5 md:ml-10 pl-4 border-l-2 border-border/50 hover:border-primary/30 transition-colors",
        )}
      >
        <div className="py-4">
          {/* Row 1: avatar + meta info */}
          <div className="flex items-start gap-3">
            <div className="pt-0.5">
              <UserAvatar
                src={comment.user.avatarUrl}
                alt={comment.user.fullName}
              />
            </div>
            <div className="flex-1 min-w-0">
              {/* Name row */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[13px] font-bold text-foreground">
                  {comment.user.fullName}
                </span>
                {comment.user.username && (
                  <span className="text-[12px] text-muted-foreground/70 font-medium">
                    @{comment.user.username}
                  </span>
                )}
                <span className="text-muted-foreground/40">·</span>
                <span className="text-[12px] text-muted-foreground/70">
                  {formatDistanceToNow(new Date(comment.createdAt), {
                    addSuffix: true,
                  })}
                </span>
                {isEdited && (
                  <>
                    <span className="text-muted-foreground/40">·</span>
                    <span className="text-[11px] text-muted-foreground/60 italic">
                      (edited)
                    </span>
                  </>
                )}
                {isOwner && (
                  <Badge
                    variant="outline"
                    className="ml-1 h-[18px] px-1.5 text-[9px] uppercase font-bold tracking-wider border-primary/20 text-primary/80 bg-primary/5 rounded-full shrink-0"
                  >
                    Author
                  </Badge>
                )}
              </div>

              {/* Comment body */}
              <p className="mt-1.5 text-[14px] leading-relaxed text-foreground/85 whitespace-pre-wrap">
                {comment.text}
              </p>

              {/* Reactions row */}
              <div className="mt-2.5 flex items-center gap-1.5">
                <TooltipProvider delayDuration={300}>
                  <ReactionButton
                    icon={ThumbsUp}
                    count={comment.actions?.upvote || 0}
                    active={comment.selectedActions?.includes("upvote")}
                    activeColor="text-blue-500"
                    label="Like"
                    onClick={() => handleReaction(comment.id, "upvote")}
                  />
                  <ReactionButton
                    icon={ThumbsDown}
                    count={comment.actions?.downvote || 0}
                    active={comment.selectedActions?.includes("downvote")}
                    activeColor="text-red-500"
                    label="Dislike"
                    onClick={() => handleReaction(comment.id, "downvote")}
                  />
                </TooltipProvider>

                {canReply && (
                  <button
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                    onClick={() => setReplyTo(comment.id)}
                  >
                    <Reply className="h-3.5 w-3.5" />
                    <span>Reply</span>
                  </button>
                )}
              </div>
            </div>

            {/* More menu (delete) — dropdown instead of direct delete */}
            {isOwner && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="h-6 w-6 shrink-0 flex items-center justify-center rounded-md text-muted-foreground/50 hover:text-foreground hover:bg-accent opacity-0 group-hover/comment:opacity-100 transition-all">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-36">
                  <DropdownMenuItem
                    variant="destructive"
                    onClick={() => handleDeleteComment(comment.id)}
                    className="gap-2"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Reply form */}
          {replyTo === comment.id && (
            <div className="pl-12 mt-2">
              <div className="rounded-lg border border-border/50 bg-muted/20 p-2.5 space-y-2">
                <div className="flex gap-2 items-start">
                  <UserAvatar
                    src={user?.imageUrl || ""}
                    alt={user?.fullName || "User"}
                    size="sm"
                  />
                  <Textarea
                    value={localReplyText}
                    onChange={(e) => setLocalReplyText(e.target.value)}
                    placeholder={`Reply to ${comment.user.fullName}...`}
                    className="min-h-[48px] text-sm resize-none bg-background/80 border-border/50 focus-visible:ring-1 focus-visible:ring-ring/30"
                    autoFocus
                  />
                </div>
                <div className="flex justify-end gap-1.5">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-7 text-xs text-muted-foreground"
                    onClick={() => {
                      setReplyTo(null);
                      setLocalReplyText("");
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    className="h-7 text-xs gap-1.5"
                    disabled={!localReplyText.trim()}
                    onClick={() => handleAddComment(localReplyText, comment.id)}
                  >
                    <Send className="h-3 w-3" />
                    Reply
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Nested replies */}
        {comment.replies?.length > 0 && (
          <div>
            {comment.replies.map((reply) => (
              <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  if (!isLoaded || isLoading) {
    return (
      <div className="mt-8 space-y-3">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold tracking-tight">Discussion</h2>
        </div>
        <Card className="border-border/40">
          <CardContent className="flex items-center justify-center py-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-4 w-4 rounded-full border-2 border-muted-foreground/30 border-t-muted-foreground animate-spin" />
              Loading comments…
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const totalComments = comments.reduce(
    (count, comment) => count + 1 + (comment.replies?.length || 0),
    0,
  );

  return (
    <TooltipProvider delayDuration={300}>
      <div className="mt-10 space-y-4">
        {/* Header */}
        <div className="flex flex-row items-center gap-2.5">
          <div className="h-8 w-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
            <MessageCircle className="h-4 w-4 text-primary" />
          </div>
          <div className="text-2xl font-bold tracking-tight whitespace-nowrap">
            Discussion
          </div>
          {totalComments > 0 && (
            <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full tabular-nums shrink-0">
              {totalComments}
            </span>
          )}
        </div>

        {/* New comment form or Sign-in prompt */}
        {user ? (
          <Card className="border-border/30 shadow-sm bg-card/80 backdrop-blur-sm">
            <CardContent className="p-4 md:p-5">
              <div className="flex gap-3 items-start">
                <div className="pt-1">
                  <UserAvatar
                    src={user?.imageUrl || ""}
                    alt={user?.fullName || "User"}
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <Textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your thoughts…"
                    className="min-h-[72px] resize-none text-sm rounded-xl border-border/40 bg-muted/30 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary/30 placeholder:text-muted-foreground/40 transition-all"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground/50">
                      Commenting as{" "}
                      <span className="font-semibold text-muted-foreground/70">
                        {user.fullName || user.username}
                      </span>
                    </span>
                    <Button
                      size="sm"
                      className="h-8 gap-1.5 px-4 text-xs rounded-full font-semibold shadow-sm"
                      disabled={!newComment.trim()}
                      onClick={() => handleAddComment(newComment)}
                    >
                      <Send className="h-3.5 w-3.5" />
                      Comment
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <SignInButton mode="modal">
            <Card className="border-border/30 shadow-sm cursor-pointer hover:bg-muted/20 transition-colors">
              <CardContent className="flex flex-col items-center justify-center py-6 space-y-2">
                <div className="h-8 w-8 rounded-full bg-muted/60 flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Sign in to join the conversation.
                </p>
              </CardContent>
            </Card>
          </SignInButton>
        )}

        {/* Comments list */}
        {comments.length === 0 ? (
          <Card className="border-border/30 border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-12 space-y-2">
              <div className="h-10 w-10 rounded-full bg-muted/50 flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-muted-foreground/50" />
              </div>
              <p className="font-semibold text-sm text-foreground/70">
                No comments yet
              </p>
              <p className="text-xs text-muted-foreground/50">
                Be the first to share your thoughts.
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-border/30 shadow-sm bg-card/80 backdrop-blur-sm">
            <CardContent className="!p-4 md:!p-6 divide-y divide-border/30">
              {comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </TooltipProvider>
  );
}
