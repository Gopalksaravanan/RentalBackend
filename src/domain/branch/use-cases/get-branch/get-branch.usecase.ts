import { getAllBranches } from "@/data-access/branch.repo";


const getAllBranchesUseCase = async () => {
    try {
        const branches = await getAllBranches();
        return {
            timestamp: new Date().toISOString(),
            statusCode: 200,
            message: "Branches fetched successfully",
            status: "OK",
            success: true,
            data: {
                branches: branches,
            },
        };
    } catch (error) {
        return {
            timestamp: new Date().toISOString(),
            statusCode: 500,
            status: "Internal Server Error",
            message: error instanceof Error ? error.message : "Unknown error",
            success: false,
        };
    }
};

export default getAllBranchesUseCase;