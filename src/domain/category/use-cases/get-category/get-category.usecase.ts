import { getCategory } from "@/data-access/category.repo";

const getCategoryUseCase = async () => {
    try{
        const categories = await getCategory();
        return {
            timestamp: new Date().toISOString(),
            statusCode: 200,
            message: "Categories fetched successfully",
            status: "OK",
            success: true,
            data: {
                categories :categories,
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
}

export default getCategoryUseCase;