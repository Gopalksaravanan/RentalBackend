import { Type } from '@sinclair/typebox'
import { FastifySchema } from "fastify";
import { branchSchema } from '../../branch.schema';


export const getOneBranchFastifySchema = {
    summary: "Get one Branch Schema",
    tags: ["Branch"],
    security: [{}],
    response:{
        200: Type.Object({
            timestamp: Type.String(),
            statusCode: Type.Number(),
            message: Type.String(),
            status: Type.String(),
            success: Type.Boolean(),
            data: Type.Object({
                branch : branchSchema
            })
        }),
        500: Type.Object({
            timestamp: Type.String(),
            statusCode: Type.Number(),
            message: Type.String(),
            status: Type.String(),
            success: Type.Boolean()
        })
    }
} satisfies FastifySchema