import mongoose, { Schema, model, models } from "mongoose";

export interface IBlog {
  _id: string;
  name: string;
  likeCount: number;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    name: {
      type: String,
      required: true,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export const Blog = models.Blog || model<IBlog>("Blog", BlogSchema);
