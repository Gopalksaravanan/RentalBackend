import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { Product } from "@/domain/product/product.schema";

const productSchema = new mongoose.Schema({
  productId: { type: String, default: uuidv4 },
  categoryId: { type: String, required: true },
  branchId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  spectifications: { type: String, required: true },
  price: { type: Number, required: true },
  rentalPrice: {
    hour: { type: Number, required: false },
    day: { type: Number, required: false },
    week: { type: Number, required: false },
    month: { type: Number, required: false },
  },
  quantity: { type: Number, required: true },
  availableQuantity: { type: Number, required: true },
  status: {
    type: String,
    enum: ["AVAILABLE", "RENTED", "MAINTANENCE"],
    required: true,
  },
  createdAt: { type: Date, default: () => new Date().toISOString() },
  updatedAt: { type: Date, default: () => new Date().toISOString() },
});

export const productModel = mongoose.model<Product>("products", productSchema);
