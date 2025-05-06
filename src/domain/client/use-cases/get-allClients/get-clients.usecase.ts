import { getAllClients } from "@/data-access/client.repo";
import { times } from "lodash";

const getClientUseCase = async () => {
     try{
        const getAllClient = await getAllClients();
        return {
            timestamp: new Date().toISOString(),
            statusCode: 200,
            message: "Clients fetched successfully",
            status:"OK",
            success: true,
            data :{
                clients: getAllClient
            }
        };
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

export default getClientUseCase