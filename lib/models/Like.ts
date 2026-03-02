import mongoose, { Schema, model, models } from "mongoose";

export interface ILike {
  _id: string;
  userId: mongoose.Types.ObjectId;
  blogId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const LikeSchema = new Schema<ILike>(
  {
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
  },
  {
    timestamps: true,
  },
);

// Compound unique index to prevent duplicate likes
LikeSchema.index({ userId: 1, blogId: 1 }, { unique: true });

export const Like = models.Like || model<ILike>("Like", LikeSchema);
