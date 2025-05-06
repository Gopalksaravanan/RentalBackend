import { Type } from '@sinclair/typebox'
import { FastifySchema } from "fastify";
import { clientSchema } from '../../client.schema';


export const getClientFastifySchema : FastifySchema = {
    summary: "Get All Clients Schema",
    tags:["Client"],
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
                clients: Type.Array(clientSchema)
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