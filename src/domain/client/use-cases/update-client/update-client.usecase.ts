import { updateClient } from "@/data-access/client.repo";

const updateClientUseCase = async (clientId,client)=>{
    try{
        const updatedClient = await updateClient(clientId,client);
        return {
            timestamp: new Date().toISOString(),
            statusCode: 200,
            message: "Client Updated Successfully",
            status:"OK",
            success: true,
            data :{
                client: updatedClient
            }  
        }
    }catch (error){
        return {
            timestamp: new Date().toISOString(),
            statusCode: 500,
            status: "Internal Server Error",
            message : error instanceof Error ? error.message : "Unknown error",
            success: false,
        }
    }
}

export default updateClientUseCase;