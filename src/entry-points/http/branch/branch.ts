import {
    FastifyPluginAsyncTypebox,
    TypeBoxTypeProvider,
  } from "@fastify/type-provider-typebox";


import {createBranchFastifySchema} from "@/domain/branch/use-cases/create-branch/create-branch.schema";
import createBranchUseCase from "@/domain/branch/use-cases/create-branch/create-branch.usecase";



  const branch : FastifyPluginAsyncTypebox = async (fastify) : Promise<void> => {
    fastify
    .withTypeProvider<TypeBoxTypeProvider>()
    .post(
        "/",
        {schema: createBranchFastifySchema},
        async function (request:any,reply){
            const createdBranch = await createBranchUseCase(request.body);
            return createdBranch;
        }
    )

  }


  export default branch;