import { Type } from '@sinclair/typebox'
import { FastifySchema } from "fastify";
import { clientSchema } from '../../client.schema';


export const updateClientFastifySchema: FastifySchema = {
    summary: "Update Client Schema",
    tags: ["Client"],
    security: [{}],
    response:{
        200: Type.Object({
            timestamp: Type.String(),
            statusCode: Type.Number(),
            message: Type.String(),
            status: Type.String(),
            success: Type.Boolean(),
            data: Type.Object({
                client : clientSchema
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