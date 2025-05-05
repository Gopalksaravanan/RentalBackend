import { Static, Type } from "@sinclair/typebox";

export const productSchema = Type.Object({
  productId: Type.String(),
  categoryId: Type.String(),
  branchId: Type.String(),
  name: Type.String(),
  description: Type.String(),
  spectifications: Type.String(),
  price: Type.Number(),
  rentalPrice: Type.Object({
    hour: Type.Number(),
    day: Type.Number(),
    week: Type.Number(),
    month: Type.Number(),
  }),
  quantity: Type.Number(),
  availableQuantity: Type.Number(),
  status: Type.String(),
  createdAt: Type.String(),
  updatedAt: Type.String(),
});

export type Product = Static<typeof productSchema>;
