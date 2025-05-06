import { readClientRequestParamSchema } from "@/domain/client/client.schema";
import { clientModel } from "./models/client.model";


const createClient = async (newClient)=>{
    try{
        const client = await clientModel.create(newClient);
        return client;
    }catch(error){
        throw error;
    }
}

const getAllClients = async () =>{
    try{
        const clients = await clientModel.find({});;
        return clients;
    } catch (error){
        throw error;
    }
}

const getOneClient = async (clientId: typeof readClientRequestParamSchema)=>{
    try{
        const client = await clientModel.findOne({
            clientId: clientId
        });
        return client;
    }
    catch (error){
        throw error;
    }
}

const updateClient = async (clientId, client) =>{
try{
    const updatedClient = await clientModel.findOneAndUpdate(
        {clientId: clientId},
        {$set:{
            name: client.name,
            email: client.email,
            phone: client.phone,
            role: client.role
        }},
        {new: true}
    )
    return updatedClient;
}catch (error){
    throw error;
}
}

export {createClient , getAllClients,getOneClient,updateClient}