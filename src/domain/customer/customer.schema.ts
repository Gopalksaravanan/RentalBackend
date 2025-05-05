import { Static, Type } from "@sinclair/typebox";

export const customerSchema = Type.Object({
    customerId: Type.String(),
    name: Type.String(),
    companyName: Type.String(),
    phone: Type.String(),
    email: Type.String(),
    address: Type.String(),
    gst: Type.String(),
    siteAddress: Type.String(),
    createdAt: Type.String(),
    updatedAt: Type.String(),
});

export type Customer = Static<typeof customerSchema>;
