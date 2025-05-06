import { readClientRequestParamSchema } from "../../client.schema";
import { getOneClient } from "@/data-access/client.repo";


const getOneClientUseCase = async (clientId: typeof readClientRequestParamSchema) => {
    try{
        const client = await getOneClient(clientId);
        return {
            timestamp: new Date().toISOString(),
            statusCode: 200,
            message: "Client fetched successfully",
            status:"OK",
            success: true,
            data :{
                client: client
            }  
        }
    } catch (error){
        return{
            timestamp: new Date().toISOString(),
            statusCode: 500,
            status: "Internal Server Error",
            message : error instanceof Error ? error.message : "Unknown error",
            success: false,
        }
    }
}

export default getOneClientUseCase;