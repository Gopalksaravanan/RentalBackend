import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { Client } from "@/domain/client/client.schema";


const clientSchema = new mongoose.Schema({
    clientId:{ type: String, default: uuidv4 },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    role: { type: String, enum:["ADMIN","STAFF"],required: true },
    branches:[{
        branchId: { type: String, required: true },
        branchName: { type: String, required: true },
        branchAddress: { type: String, required: true },  
        branchPhone: { type: String, required: true },
        branchEmail: { type: String, required: true },
        branchGst: { type: String, required: true },
        branchContactPerson: { type: String, required: true }
    }],
    createdAt: { type: Date, default: () => new Date()},
    updatedAt: { type: Date, default: () => new Date()}
})

export const clientModel = mongoose.model<Client>("admins", clientSchema)