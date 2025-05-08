import { getOneBranch } from "@/data-access/branch.repo";
import { readBranchRequestParamSchema } from "../../branch.schema";

const getOneBranchUseCase = async (branchId: typeof readBranchRequestParamSchema) => {
    try{
        const branch = await getOneBranch(branchId);
        return {
            timestamp: new Date().toISOString(),
            statusCode: 200,
            message: "Branch fetched successfully",
            status:"OK",
            success: true,
            data :{
                branch: branch
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

export default getOneBranchUseCase;