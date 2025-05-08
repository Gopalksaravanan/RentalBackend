import { createCategory } from "@/data-access/category.repo";


const createCategoryUseCase = async (newCategory) =>{
    try{
        const createdCategory = await createCategory(newCategory);
        return {
            timestamp: new Date().toISOString(),
            statusCode: 200,
            message: "Category created successfully",
            status: "OK",
            success: true,
            data: {
                category: createdCategory
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

export default createCategoryUseCase;