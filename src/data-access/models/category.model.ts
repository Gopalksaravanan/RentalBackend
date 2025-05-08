import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { Category } from "@/domain/category/category.schema";

// const productSchema = new mongoose.Schema({
//   productId: { type: String, default: uuidv4 },
//   categoryId: { type: String, required: true },
//   branchId: { type: String, required: true },
//   productCode: { type: String, required: true },
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   specifications: { type: String, required: true },
//   price: { type: Number, required: true },
//   rentalPrice: {
//     hour: { type: Number, required: true },
//     day: { type: Number, required: true },
//     week: { type: Number, required: true },
//     month: { type: Number, required: true },
//   },
//   quantity: { type: Number, required: true },
//   availableQuantity: { type: Number, required: true },
//   status: {
//     type: String,
//     enum: ["AVAILABLE", "RENTED", "MAINTENANCE"],
//     required: true,
//   },
//   createdAt: { type: Date, default: () => new Date().toISOString() },
//   updatedAt: { type: Date, default: () => new Date().toISOString() },
// });

const categorySchema = new mongoose.Schema({
  categoryId: { type: String, default: uuidv4 },
  categoryName: { type: String, required: true },
  description: { type: String, required: true },
  // products: [productSchema],
  createdAt: { type: Date, default: () => new Date()},
  updatedAt: { type: Date, default: () => new Date()},
});

export const categoryModel = mongoose.model<Category>(
  "categories",
  categorySchema
);
