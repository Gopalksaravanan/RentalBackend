import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { Rental } from "@/domain/rental/rental.schema";

const rentalSchema = new mongoose.Schema({
  rentalId: { type: String, default: uuidv4 },
  customerId: { type: String, required: true },
  productId: { type: String, required: true },
  branchId: { type: String, required: true },
  rentalStartDate: { type: Date, required: true },
  rentalEndDate: { type: Date, required: true },
  rateType: { type: String,enum:["HOURLY","DAILY","WEEKLY","MONTHLY"], required: true },  
  rate : { type: Number, required: true },
  deposit: { type: Number, required: false},
  status: {
    type: String,
    enum: ["RENTED", "RETURNED", "CANCELLED"],
    required: true,
  },
  createdAt: { type: Date, default: () => new Date().toISOString() },
  updatedAt: { type: Date, default: () => new Date().toISOString() },
});

export const rentalModel = mongoose.model<Rental>("rentals", rentalSchema);