import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { Customer } from "@/domain/customer/customer.schema";

const customerSchema = new mongoose.Schema({
    customerId: { type: String, default: uuidv4 },
    name: { type: String, required: true },
    companyName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    gst: { type: String, required: true },
    siteAddress: { type: String, required: true },
    createdAt: { type: Date, default: () => new Date().toISOString() },
    updatedAt: { type: Date, default: () => new Date().toISOString() }
})

export const customerModel = mongoose.model<Customer>("customers", customerSchema)