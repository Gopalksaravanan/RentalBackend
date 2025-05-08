import { createProduct } from "@/data-access/product.repo";
import { time } from "console";

const createProductUseCase = async (newProduct) => {
    try{
        const createdProduct = await createProduct(newProduct);
        return {
            timestamp: new Date().toISOString(),
            statusCode: 200,
            message: "Product created successfully",
            status: "OK",
            success: true,
            data: { 
                product: createdProduct,
            },
        }
    } catch (error) {
        return {
            timestamp: new Date().toISOString(),
            statusCode: 500,
            message: "Internal server error",
            status: "Internal Server Error",
            success: false,
            packageVersion: process.env.npm_package_version,
        }
    }
}


export default createProductUseCase;