import { FastifySchema } from "fastify";
import { Type } from "@sinclair/typebox";
import { categorySchema } from "../../category.schema";



export const getOneCategoryFastifySchema = {
    summary: "get One Category Schema",
    tags: ["Category"],
    security: [{}],
    response: {
        200: Type.Object({
            timestamp: Type.String(),
            statusCode: Type.Number(),
            message: Type.String(),
            status: Type.String(),
            success: Type.Boolean(),
            packageVersion: Type.Optional(Type.String()),
            data: Type.Object({
                category : categorySchema})
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