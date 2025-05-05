import { createClient } from "@/data-access/client.repo";

const createClientUseCase = async (newClient) => {
    try{
        const createdClient = await createClient(newClient);
        return {
            timestamp: new Date().toISOString(),
            statusCode: 200,
            message: "Client created successfully",
            status: "OK",
            success: true,
            data: {
                client: createdClient
            }
        };
    }catch(error){
        return {
            timestamp: new Date().toISOString(),
            statusCode: 500,
            status: "Internal Server Error",
            message: error instanceof Error ? error.message : "An error occurred",
            success: false,
        };

    }
}


export default createClientUseCase;