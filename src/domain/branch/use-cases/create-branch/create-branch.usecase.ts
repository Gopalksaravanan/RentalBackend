import { createBranch } from "@/data-access/branch.repo";

const createBranchUseCase = async (newBranch) => {
    try{
        const createdBranch = await createBranch(newBranch);
        return {
            timestamp: new Date().toISOString(),
            statusCode: 200,
            message: "Branch created successfully",
            status: "OK",
            success: true,
            data: {
                branch: createdBranch
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


export default createBranchUseCase;