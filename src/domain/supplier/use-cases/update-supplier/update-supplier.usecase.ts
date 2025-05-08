import { updateSupplier } from "@/data-access/supplier.repo";
import { times } from "lodash";

const updateSupplierUseCase = async (supplierId, supplier) => {
    try{
        const updatedSupplier = await updateSupplier(supplierId, supplier);
        return {
            timestamp: new Date().toISOString(),
            statusCode: 200,
            message: "Supplier Updated Successfully",
            status: "OK",
            success: true,
            data: {
                supplier: updatedSupplier
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

export default updateSupplierUseCase;