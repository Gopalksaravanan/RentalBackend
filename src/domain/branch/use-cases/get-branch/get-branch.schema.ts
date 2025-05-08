import { Type } from '@sinclair/typebox'
import { FastifySchema } from "fastify";
import { branchSchema } from '../../branch.schema';

export const getBranchesFastifySchema = {
    summary: "Get All Branches Schema",
    tags:["Branch"],
    security:[{}],
    response:{
        200: Type.Object({
            timestamp: Type.String(),
            statusCode: Type.Number(),
            message: Type.String(),
            status: Type.String(),
            success: Type.Boolean(),
            packageVersion : Type.Optional(Type.String()),
            data: Type.Object({
                branches: Type.Array(branchSchema)
            })
        }),
        500: Type.Object({
            timestamp: Type.String(),
            statusCode: Type.Number(),
            status: Type.String(),
            message: Type.String(),
            success: Type.Boolean(),
            packageVersion : Type.Optional(Type.String()),
        })
    }
} satisfies FastifySchema;