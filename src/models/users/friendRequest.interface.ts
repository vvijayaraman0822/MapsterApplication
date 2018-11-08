export interface FriendRequest {
    fromID: string;
    status: Status;
}

export enum Status {
    Pending,
    Accepted,
    Declined
}