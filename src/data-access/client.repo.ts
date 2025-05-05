import { clientModel } from "./models/client.model";


const createClient = async (newClient)=>{
    try{
        const client = await clientModel.create(newClient);
        return client;
    }catch(error){
        throw error;
    }
}




export {createClient}