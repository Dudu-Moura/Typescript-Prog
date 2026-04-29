import axios from "axios"

export async function requestHandle(request: Promise<unknown>, url: string){
    //TODO: Refatorar lógica do requestHandler
    try{
        const response = await axios.get<unknown>(url);
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