'use strict';

import { model, Schema, Types } from 'mongoose';

const DOCUMENT_NAME = 'Notification';
const COLLECTION_NAME = 'notifications';

const notificationSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
    type: {
      type: String,
      enum: ['message', 'friend_request', 'system'],
      required: true,
    },
    message: {
      type: String,
      trim: true,
      default: '',
    },
    conversationId: {
      type: Types.ObjectId,
      ref: 'Conversation',
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

notificationSchema.index({ userId: 1, isRead: 1 });
notificationSchema.index({ userId: 1, createdAt: -1 });

export default model(DOCUMENT_NAME, notificationSchema);
