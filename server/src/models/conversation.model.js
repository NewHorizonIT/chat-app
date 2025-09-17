"use strict";

import { model, Schema, Types } from "mongoose";

const COLLECTION_NAME = "conversations";
const DOCUMMENT_NAME = "Conversation";

const conversationSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["direct", "group"],
    },
    participants: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],
    groupName: {
      type: String,
    },
    lastMessageContent: {
      type: String,
    },
    lastMessageSenderId: {
      type: Types.ObjectId,
      ref: "User",
    },
    lastMessageSendAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

conversationSchema.index({ participants: 1 });

export default model(DOCUMMENT_NAME, conversationSchema);
