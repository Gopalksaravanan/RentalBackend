import {
    FastifyPluginAsyncTypebox,
    TypeBoxTypeProvider,
  } from "@fastify/type-provider-typebox";

  
  import { createClientFastifySchema } from "@/domain/client/use-cases/create-client/create-client.schema";
  import createClientUseCase from "@/domain/client/use-cases/create-client/create-client.usecase";
  import { getClientFastifySchema } from "@/domain/client/use-cases/get-allClients/get-clients.schema";
  import getClientUseCase from "@/domain/client/use-cases/get-allClients/get-clients.usecase";
  import { getOneClientFastifySchema } from "@/domain/client/use-cases/getone-client/getone-client.schema";
  import getOneClientUseCase from "@/domain/client/use-cases/getone-client/getone-client.usecase";
  import { updateClientFastifySchema } from "@/domain/client/use-cases/update-client/update-client.schema";
  import updateClientUseCase from "@/domain/client/use-cases/update-client/update-client.usecase";

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
    .get(
        "/",
        {schema: getClientFastifySchema},
        async function (request:any,reply){
            const clients = await getClientUseCase();
            return clients;
        }
    )
    .get(
        "/:clientId",
        {schema : getOneClientFastifySchema},
        async function (request:any,reply){
            let clientId = request.params.clientId;
            const client = await getOneClientUseCase(clientId);
            return client;
        }
    )
    .put(
        "/:clientId",
        {schema: updateClientFastifySchema},
        async function (request:any,reply){
            let clientId = request.params.clientId;
            const clientBody = request.body;
            const updatedClient = await updateClientUseCase(clientId,clientBody);
            return updatedClient;
        }
    )
}

export default client;