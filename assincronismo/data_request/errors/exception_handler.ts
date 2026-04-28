import axios from "axios"

export async function requestHandle(request(data: T) => Promise<unknown>, url: string){
    try{
        const response = await axios.get(url);
        return response.data;
    }
}