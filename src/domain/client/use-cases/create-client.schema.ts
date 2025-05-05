import { FastifySchema } from "fastify";
import { Type } from "@sinclair/typebox";
import { createClientRequestDTO,clientSchema } from "../client.schema";


export const createClientFastifySchema = {
    summary: "Create Client Schema",
    tags:["Client"],
    security:[{}],
    body: createClientRequestDTO,
    response:{
        200: Type.Object({
            timestamp: Type.String(),
            statusCode: Type.Number(),
            message: Type.String(),
            status: Type.String(),
            success: Type.Boolean(),
            packageVersion: Type.Optional(Type.String()),
            data: Type.Object({
              client: clientSchema,
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