import {
    FastifyPluginAsyncTypebox,
    TypeBoxTypeProvider,
  } from "@fastify/type-provider-typebox";


import { createProductFastifySchema } from "@/domain/product/use-cases/create-product/create-product.schema";
import createProductUseCase from "@/domain/product/use-cases/create-product/create-product.usecase";


  const product : FastifyPluginAsyncTypebox = async (fastify) : Promise<void> => {
    fastify
    .withTypeProvider<TypeBoxTypeProvider>()
    .post(
        "/",
        {schema: createProductFastifySchema},
        async function (request:any,reply){
            const createdProduct = await createProductUseCase(request.body);
            return createdProduct;
        }
    )

  }


  export default product;