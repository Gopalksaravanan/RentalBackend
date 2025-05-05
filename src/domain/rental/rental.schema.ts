import { Static, Type } from "@sinclair/typebox";


export const rentalSchema = Type.Object({
  rentalId: Type.String(),
  customerId: Type.String(),
  productId: Type.String(),
  branchId: Type.String(),
  rentalStartDate: Type.String(),
  rentalEndDate: Type.String(),
    rateType: Type.Union([
        Type.Literal("HOURLY"),
        Type.Literal("DAILY"),
        Type.Literal("WEEKLY"),
        Type.Literal("MONTHLY"),
    ]),
    rate: Type.Number(),
    deposit: Type.Optional(Type.Number()),
    status: Type.Union([
        Type.Literal("RENTED"),
        Type.Literal("RETURNED"),
        Type.Literal("CANCELLED"),
    ]),
  createdAt: Type.String(), 
  updatedAt: Type.String(),
});

export type Rental = Static<typeof rentalSchema>;