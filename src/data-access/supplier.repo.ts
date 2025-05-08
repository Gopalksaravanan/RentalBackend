import { readSupplierRequestParamSchema } from "@/domain/supplier/supplier.schema";
import { supplierModel } from "./models/supplier.model";

const createSupplier = async (newSupplier) => {
    try {
        const supplier = await supplierModel.create(newSupplier);
        return supplier;
    } catch (error) {
        throw error;
    }
}

const getAllSupplier = async () => {
    try {
        const suppliers = await supplierModel.find({});
        return suppliers;
    } catch (error) {
        throw error;
    }
}

const getOneSupplier = async (supplierId: typeof readSupplierRequestParamSchema) => {
    try {
        const supplier = await supplierModel.findOne({
            supplierId: supplierId
        });
        return supplier;
    }
    catch (error) {
        throw error;
    }
}


const updateSupplier = async (supplierId,supplier) =>{
    try{
        const updatedSupplier = await supplierModel.findOneAndUpdate(
            {supplierId: supplierId},
            {$set:{
                supplierName: supplier.supplierName,
                supplierEmail: supplier.supplierEmail,
                supplierPhone: supplier.supplierPhone,
                supplierAddress: supplier.supplierAddress,
                supplierGst: supplier.supplierGst,
                products: supplier.products
            }},
            {new: true}
        )
        return updatedSupplier;
    }catch (error){
        throw error;
}
    }

export { createSupplier,getAllSupplier,getOneSupplier,updateSupplier};