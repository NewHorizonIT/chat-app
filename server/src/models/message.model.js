'use strict';

import { model, Schema, Types } from 'mongoose';

const DOCUMENT_NAME = 'Message';
const COLLECTION_NAME = 'messages';

const messageSchema = new Schema(
  {
    conversationId: {
      type: Types.ObjectId,
      required: true,
      ref: 'Conversation',
    },
    senderId: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    attachments: {
      type: Schema.Types.Mixed,
    },
    status: {
      type: String,
      enum: ['sent', 'delivered', 'seen'],
      default: 'sent',
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

export default model(DOCUMENT_NAME, messageSchema);
