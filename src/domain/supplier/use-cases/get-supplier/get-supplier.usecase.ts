import { getAllSupplier } from "@/data-access/supplier.repo";

const getSupplierUseCase = async () => {
    try{
        const suppliers = await getAllSupplier();
        return {
            timestamp: new Date().toISOString(),
            statusCode: 200,
            message: "Suppliers retrieved successfully",
            status: "OK",
            success: true,
            data: {
                suppliers: suppliers
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
export default getSupplierUseCase;