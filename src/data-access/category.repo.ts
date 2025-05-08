import { readCategoryRequestParamSchema } from "@/domain/category/category.schema";
import { categoryModel } from "./models/category.model";


const createCategory = async (newCategory) =>{
    try{
        const createdCategory = await categoryModel.create(newCategory);
        return createdCategory
}
    catch (error) {
        throw error;
    }
}

const getCategory = async ()=>{
    try{
        const categories = await categoryModel.find({});
        return categories
    }
    catch (error) {
        throw error;
    }
}

const getOneCategory = async (categoryId: typeof readCategoryRequestParamSchema) =>{
    try{
        const category = await categoryModel.findOne({
            categoryId: categoryId,
        })
        return category;
    } catch (error) {
        throw error;
    }
}

export {createCategory,getCategory,getOneCategory}