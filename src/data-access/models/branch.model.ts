import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { Branch } from "@/domain/branch/branch.schema";

const branchSchema = new mongoose.Schema({
    clientId:{ type: String, required: true },
    branchId:{ type: String, default: uuidv4 },
    branchName: { type: String, required: true },
    branchAddress: { type: String, required: true },
    branchPhone: { type: String, required: true },
    branchEmail: { type: String, required: true },
    branchGst: { type: String, required: true },
    branchContactPerson: { type: String, required: true },
    createdAt: { type: Date, default: () => new Date()},
    updatedAt: { type: Date, default: () => new Date()}
})

export const branchModel = mongoose.model<Branch>("branch", branchSchema)