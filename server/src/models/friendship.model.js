"use strict";

import { model, Schema, Types } from "mongoose";

const DOCUMENT_NAME = "Friendship";
const COLLECTION_NAME = "friendships";

const friendshipSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    friendId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
      validate: {
        validator: function (v) {
          return v.toString() !== this.userId.toString();
        },
        message: "User cannot be friend with themselves",
      },
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "blocked"],
      default: "pending",
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

friendshipSchema.index({ userId: 1, friendId: 1 }, { unique: true });
friendshipSchema.index({ friendId: 1, status: 1 });

export default model(DOCUMENT_NAME, friendshipSchema);
