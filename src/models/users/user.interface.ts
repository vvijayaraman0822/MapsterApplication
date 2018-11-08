export interface User {
    firstName: string;
    lastName: string;
    registerDate: string;
    lastLogin: string;
    email: string;
    // validated: boolean; Defined in firebase.User
    profileImage: string;
    publicImages: string;
    privateImages: string;
    friendsList: string[];
 }