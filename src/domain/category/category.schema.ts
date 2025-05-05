import { Static, Type } from "@sinclair/typebox";

export const productSchema = Type.Object({
  productId: Type.String(),
  categoryId: Type.String(),
  branchId: Type.String(),
  productCode: Type.String(),
  name: Type.String(),
  description: Type.String(),
  specifications: Type.String(),
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

export const categorySchema = Type.Object({
  categoryId: Type.String(),
  categoryName: Type.String(),
  description: Type.String(),
  products: Type.Array(productSchema),
  createdAt: Type.String(),
  updatedAt: Type.String(),
});

export type Category = Static<typeof categorySchema>;
