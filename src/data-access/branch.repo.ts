import { branchModel } from "./models/branch.model";



const createBranch = async (newBranch) => {
    try {
        const branch = await branchModel.create(newBranch);
        return branch;
    } catch (error) {
        throw error;
    }
};


export {createBranch}