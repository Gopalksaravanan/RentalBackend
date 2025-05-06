import { FastifySchema } from "fastify";
import { Type } from "@sinclair/typebox";
import { branchSchema, createBranchRequestDTO } from "../../branch.schema";


export const createBranchFastifySchema  = {
    summary: "Create Branch Schema",
    tags:["Branch"],
    security:[{}],
    body : createBranchRequestDTO,
    response:{
        200: Type.Object({
            timestamp: Type.String(),
            statusCode: Type.Number(),
            message: Type.String(),
            status: Type.String(),
            success: Type.Boolean(),
            packageVersion: Type.Optional(Type.String()),
            data: Type.Object({
                branch: branchSchema
            })
        }),
        500: Type.Object({
            timestamp: Type.String(),
            statusCode: Type.Number(),
            status: Type.String(),
            message: Type.String(),
            success: Type.Boolean(),
            packageVersion: Type.Optional(Type.String()),
        })
    }
} satisfies FastifySchema;