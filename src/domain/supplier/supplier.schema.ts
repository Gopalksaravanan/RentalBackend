import { Static, Type } from "@sinclair/typebox";


export const supplierSchema = Type.Object({
    supplierId: Type.String(),
    supplierName: Type.String(),
    supplierEmail: Type.String(),
    supplierPhone: Type.String(),
    supplierAddress: Type.String(),
    supplierGst: Type.String(),
    products: Type.Array(Type.String()),
    createdAt: Type.String(),
    updatedAt: Type.String(),
})


export type Supplier = Static<typeof supplierSchema>;

export const createSupplierRequestDTO = Type.Omit(supplierSchema, ["supplierId", "createdAt", "updatedAt"]);

export const readSupplierRequestParamSchema = Type.Object({
    supplierId: Type.String(),
  })
  