import { Type } from '@sinclair/typebox'
import { FastifySchema } from "fastify";
import { supplierSchema } from '../../supplier.schema';


export const getOneSupplierFastifySchema: FastifySchema = {
    summary: "Get one Supplier Schema",
    tags: ["Supplier"],
    security: [{}],
    response:{
        200: Type.Object({
            timestamp: Type.String(),
            statusCode: Type.Number(),
            message: Type.String(),
            status: Type.String(),
            success: Type.Boolean(),
            data: Type.Object({
                supplier: supplierSchema}
            )
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