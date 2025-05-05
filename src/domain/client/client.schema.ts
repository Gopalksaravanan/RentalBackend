import { Static, Type } from "@sinclair/typebox";

export const clientSchema = Type.Object({
  clientId: Type.String(),
  name: Type.String(),
  email: Type.String(),
  phone: Type.String(),
  role: Type.String(),
  branches: Type.Array(
    Type.Object({
      branchId: Type.String(),
      branchName: Type.String(),
      branchAddress: Type.String(),
      branchPhone: Type.String(),
      branchEmail: Type.String(),
      branchGst: Type.String(),
      branchContactPerson: Type.String(),
    })
  ),
  createdAt: Type.String(),
  updatedAt: Type.String(),
});

export type Client = Static<typeof clientSchema>;
