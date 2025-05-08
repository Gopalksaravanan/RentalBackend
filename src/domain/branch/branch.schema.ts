import { Static, Type } from "@sinclair/typebox";

export const branchSchema = Type.Object({
  clientId: Type.String(),
  branchId: Type.String(),
  branchName: Type.String(),
  branchAddress: Type.String(),
  branchPhone: Type.String(),
  branchEmail: Type.String(),
  branchGst: Type.String(),
  branchContactPerson: Type.String(),
  createdAt: Type.String(),
  updatedAt: Type.String(),
});

export type Branch = Static<typeof branchSchema>;

export const createBranchRequestDTO = Type.Omit(branchSchema, [
  "branchId","createdAt", "updatedAt"]);
  
export const readBranchRequestParamSchema = Type.Object({
    branchId: Type.String(),
  })
  