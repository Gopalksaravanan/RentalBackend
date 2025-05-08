import { FastifySchema } from "fastify";
import { Type } from "@sinclair/typebox";
import { createSupplierRequestDTO, supplierSchema } from "../../supplier.schema";

export const createSupplierFastifySchema = {
    summary: "Create Supplier Schema",
    tags:["Supplier"],
    security:[{}],
    body:createSupplierRequestDTO,
    response:{
        200: Type.Object({
            timestamp: Type.String(),
            statusCode: Type.Number(),
            message: Type.String(),
            status: Type.String(),
            success: Type.Boolean(),
            packageVersion: Type.Optional(Type.String()),
            data: Type.Object({
              supplier: supplierSchema,
            }),
          }),
          500: Type.Object({
            timestamp: Type.String(),
            statusCode: Type.Number(),
            status: Type.String(),
            message: Type.String(),
            success: Type.Boolean(),
            packageVersion: Type.Optional(Type.String()),
          }),
    }
} satisfies FastifySchema;