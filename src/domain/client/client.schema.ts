import { Static, Type } from "@sinclair/typebox";

export const clientSchema = Type.Object({
  clientId: Type.String(),
  name: Type.String(),
  email: Type.String(),
  phone: Type.String(),
  role: Type.String(),
  createdAt: Type.String(),
  updatedAt: Type.String(),
});

export type Client = Static<typeof clientSchema>;
