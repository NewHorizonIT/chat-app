# MongoDB Schema – Chat App

## Users

| Field        | Type     | Key | Description                |
| ------------ | -------- | --- | -------------------------- |
| \_id         | string   | PK  | Primary key                |
| username     | string   |     | Tên người dùng             |
| email        | string   | UQ  | Email (unique)             |
| passwordHash | string   |     | Mật khẩu hash              |
| avatar       | string   |     | Ảnh đại diện               |
| status       | string   |     | online / offline / busy    |
| lastSeen     | datetime |     | Thời gian online cuối cùng |
| createdAt    | datetime |     | Thời gian tạo              |
| updatedAt    | datetime |     | Thời gian cập nhật         |

## Conversations

| Field                | Type     | Key | Description                  |
| -------------------- | -------- | --- | ---------------------------- |
| \_id                 | string   | PK  | Primary key                  |
| type                 | string   |     | direct / group               |
| participants         | string[] |     | Array of userId              |
| groupName            | string   |     | Tên nhóm (nếu group)         |
| groupAvatar          | string   |     | Ảnh nhóm (nếu group)         |
| lastMessage_content  | string   |     | Nội dung message cuối cùng   |
| lastMessage_senderId | string   |     | Sender của message cuối cùng |
| lastMessage_sentAt   | datetime |     | Thời gian message cuối cùng  |
| createdAt            | datetime |     | Thời gian tạo                |
| updatedAt            | datetime |     | Thời gian cập nhật           |

## Messages

| Field          | Type     | Key | Description                     |
| -------------- | -------- | --- | ------------------------------- |
| \_id           | string   | PK  | Primary key                     |
| conversationId | string   | Ref | Tham chiếu → conversations.\_id |
| senderId       | string   | Ref | Tham chiếu → users.\_id         |
| content        | string   |     | Nội dung tin nhắn               |
| attachments    | json     |     | File đính kèm (nếu có)          |
| status         | string   |     | sent / delivered / seen         |
| createdAt      | datetime |     | Thời gian gửi tin nhắn          |

## Friendships

| Field     | Type     | Key | Description                  |
| --------- | -------- | --- | ---------------------------- |
| \_id      | string   | PK  | Primary key                  |
| userId    | string   | Ref | Tham chiếu → users.\_id      |
| friendId  | string   | Ref | Tham chiếu → users.\_id      |
| status    | string   |     | pending / accepted / blocked |
| createdAt | datetime |     | Thời gian tạo                |
| updatedAt | datetime |     | Thời gian cập nhật           |

## Notifications

| Field          | Type     | Key | Description                       |
| -------------- | -------- | --- | --------------------------------- |
| \_id           | string   | PK  | Primary key                       |
| userId         | string   | Ref | Tham chiếu → users.\_id           |
| type           | string   |     | message / friend_request / system |
| message        | string   |     | Nội dung thông báo                |
| conversationId | string   | Ref | Tham chiếu → conversations.\_id   |
| isRead         | boolean  |     | Đã đọc hay chưa                   |
| createdAt      | datetime |     | Thời gian tạo                     |
