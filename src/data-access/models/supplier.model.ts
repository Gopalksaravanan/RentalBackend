import { Supplier } from "@/domain/supplier/supplier.schema";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";


const supplierSchema = new mongoose.Schema({
    supplierId:{ type: String, default: uuidv4 },
    supplierName: { type: String, required: true },
    supplierEmail: { type: String, required: true, unique: true },
    supplierPhone: { type: String, required: true },
    supplierAddress: { type: String, required: true },
    supplierGst: { type: String, required: true },
    products:[{type:String, required: true}],
    createdAt: { type: Date, default: () => new Date()},
    updatedAt: { type: Date, default: () => new Date()}
})

export const supplierModel = mongoose.model<Supplier>("supplier", supplierSchema)