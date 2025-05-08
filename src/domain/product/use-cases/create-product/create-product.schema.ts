import { FastifySchema } from "fastify";
import { Type } from "@sinclair/typebox";
import { createProudctRequestDTO, productSchema } from "../../product.schema";


export const createProductFastifySchema = {
    summary:"create product schema",
    tags:["Product"],
    security:[{}],
    body: createProudctRequestDTO,
    response:{
        200: Type.Object({
            timestamp: Type.String(),
            statusCode: Type.Number(),
            message: Type.String(),
            status: Type.String(),
            success: Type.Boolean(),
            packageVersion: Type.Optional(Type.String()),
            data: Type.Object({
                product: productSchema
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