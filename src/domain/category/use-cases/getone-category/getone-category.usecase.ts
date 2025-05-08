import { getOneCategory } from "@/data-access/category.repo";
import { readCategoryRequestParamSchema } from "../../category.schema";

const getOneCategoryUseCase = async (categoryId: typeof readCategoryRequestParamSchema) => {
    try{
        const category = await getOneCategory(categoryId);
        return {
            timestamp: new Date().toISOString(),
            statusCode: 200,
            message: "Category fetched successfully",
            status: "OK",
            success: true,
            data: {
                category :category,
            },
        };
    }catch (error) {
        return {
            timestamp: new Date().toISOString(),
            statusCode: 500,
            status: "Internal Server Error",
            message: error instanceof Error ? error.message : "Unknown error",
            success: false,
        };
    }
}

export default getOneCategoryUseCase;