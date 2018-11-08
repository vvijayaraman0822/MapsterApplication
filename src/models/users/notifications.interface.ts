export interface Notification {
    notification: NotificationType;
    message: string;
}

export enum NotificationType {
    FriendRequest,
    NewMessage,
    NearbyFriend
}