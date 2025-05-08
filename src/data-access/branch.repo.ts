import { readBranchRequestParamSchema } from "@/domain/branch/branch.schema";
import { branchModel } from "./models/branch.model";



const createBranch = async (newBranch) => {
    try {
        const branch = await branchModel.create(newBranch);
        return branch;
    } catch (error) {
        throw error;
    }
};

const getAllBranches = async () => {
    try {
        const branches = await branchModel.find({});
        return branches;
    } catch (error) {
        throw error;
    }
};

const getOneBranch = async (branchId : typeof readBranchRequestParamSchema) => {
    try {
        const branch = await branchModel.findOne({
            branchId: branchId
        });
        return branch;
    } catch (error) {
        throw error;
    }
};

export {createBranch,getAllBranches,getOneBranch};