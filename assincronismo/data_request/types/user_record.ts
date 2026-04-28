import { CommentPost } from "./comment_post";
import { User } from "./user";

export interface UserRecord{
    user: User,
    posts: CommentPost[],
    totalComentaries: number
}