import { Post } from "./post";
import { Comment } from "./comment";

export interface CommentPost{
    post: Post
    comentary: Comment[];
}