import { createSupplier } from "@/data-access/supplier.repo";

const createSupplierUseCase = async (newSupplier) => {
    try{
        const createdSupplier = await createSupplier(newSupplier);
        return {
            timestamp: new Date().toISOString(),
            statusCode: 200,
            message: "Supplier created successfully",
            status: "OK",
            success: true,
            data: {
                supplier: createdSupplier
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
export default createSupplierUseCase;