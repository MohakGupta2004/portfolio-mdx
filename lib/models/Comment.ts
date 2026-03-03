import mongoose, { Schema, model, models } from "mongoose";

export interface IComment {
  _id: string;
  content: string;
  userId: mongoose.Types.ObjectId;
  blogId: mongoose.Types.ObjectId;
  parentId?: mongoose.Types.ObjectId; // For nested replies
  reactions: {
    upvote: number;
    downvote: number;
    rocket: number;
    heart: number;
  };
  selectedReactions: string[]; // Track which reactions the user selected
  createdAt: Date;
  updatedAt: Date;
}

const CommentSchema = new Schema<IComment>(
  {
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    blogId: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
    parentId: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
      required: false,
    },
    reactions: {
      upvote: {
        type: Number,
        default: 0,
      },
      downvote: {
        type: Number,
        default: 0,
      },
      rocket: {
        type: Number,
        default: 0,
      },
      heart: {
        type: Number,
        default: 0,
      },
    },
    selectedReactions: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

export const Comment =
  models.Comment || model<IComment>("Comment", CommentSchema);
