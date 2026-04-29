import { PostWithComments } from "./comment_post";
import { User } from "./user";

export interface UserRecord{
    user: User,
    posts: PostWithComments[],
    totalComentaries: number
}