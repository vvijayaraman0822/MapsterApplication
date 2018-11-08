import { Location } from "./location.interface";

export interface Photo {
    image: string;  // reference to storage location directory
    tag: string[];
    location: Location;
    likes: number;
    comments: string[];
}