"use strict";

import { model, Schema } from "mongoose";

const DOCUMENT_NAME = "User";
const COLLECTION_NAME = "users";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    avatar: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["online", "offline"],
      default: "online",
    },
    lastSeen: {
      type: Date,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

userSchema.index({ username: 1 });

export default model(DOCUMENT_NAME, userSchema);
