import { productModel } from "./models/product.model";

const createProduct = async (newProduct) =>{
    try{
        const product = await productModel.create(newProduct);
        return product;
    }catch (error) {
        throw error;
    }
}



export {createProduct}