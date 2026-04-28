import axios from 'axios'
import { User } from '../types/user'
import { Post } from '../types/post';

async function getUser(userId: number): Promise<User>{
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

async function searchUserPosts(userId: number): Promise<Post>{
    try{
        const response= await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${userId}`);
        return response.data;
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