import axios from 'axios'
import { User } from '../types/user'
import { Post } from '../types/post';
import { Comment } from '../types/comment';

export class SearchService{

    async getUser(userId: number): Promise<User>{
        try{
            const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
            return response.data
        }
        catch(ex){
            if(ex instanceof Error){
                throw new Error("Algo deu errado... " + ex.message);
            }
            else{
                throw new Error("Ocorreu um erro desconhecido");
            }
        }
    }

    async getUserPosts(userId: number): Promise<Post[]>{
        try{
            const allPosts = await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            return allPosts.data;
        }
        catch(ex){
            if(ex instanceof Error){
                throw new Error("Algo deu errado... " + ex.message);
            }
            else{
                throw new Error("Ocorreu um erro desconhecido");
            }
        }
    }

    async getPostComments(postId: number): Promise<Comment[]>{
        try{
            const comments = await axios.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
            return comments.data;
        }
        catch(ex){
            if(ex instanceof Error){
                throw new Error("Algo deu errado... " + ex.message);
            }
            else{
                throw new Error("Ocorreu um erro desconhecido");
            }
        }
    }
}