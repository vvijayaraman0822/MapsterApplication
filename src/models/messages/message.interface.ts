export interface Message {
    fromID: string;
    toID: string;
    message: string;
    read: boolean;
    timestamp: string;
}