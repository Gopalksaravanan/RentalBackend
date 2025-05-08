import { getOneSupplier } from "@/data-access/supplier.repo";
import { readSupplierRequestParamSchema } from "../../supplier.schema";

const getOneSupplierUseCase = async (supplierId: typeof readSupplierRequestParamSchema) => {
    try {
        const supplier = await getOneSupplier(supplierId);
        return {
            timestamp: new Date().toISOString(),
            statusCode: 200,
            message: "Supplier fetched successfully",
            status: "OK",
            success: true,
            data: {
                supplier: supplier
            }
        }
    } catch (error) {
        return {
            timestamp: new Date().toISOString(),
            statusCode: 500,
            status: "Internal Server Error",
            message: error instanceof Error ? error.message : "Unknown error",
            success: false,
        }
    }
}

export default getOneSupplierUseCase;