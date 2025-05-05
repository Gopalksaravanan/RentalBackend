import {
    FastifyPluginAsyncTypebox,
    TypeBoxTypeProvider,
  } from "@fastify/type-provider-typebox";

  
  import { createClientFastifySchema } from "@/domain/client/use-cases/create-client.schema";
  import createClientUseCase from "@/domain/client/use-cases/create-client.usecase";



  const client: FastifyPluginAsyncTypebox = async (fastify) : Promise<void> => {
    fastify
    .withTypeProvider<TypeBoxTypeProvider>()
    .post(
        "/",
        {schema: createClientFastifySchema},
        async function (request:any,reply){
            const createdClient = await createClientUseCase(request.body);
            return createdClient;
        }
    )
}

export default client;