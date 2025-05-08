import {
    FastifyPluginAsyncTypebox,
    TypeBoxTypeProvider,
  } from "@fastify/type-provider-typebox";


import {createBranchFastifySchema} from "@/domain/branch/use-cases/create-branch/create-branch.schema";
import createBranchUseCase from "@/domain/branch/use-cases/create-branch/create-branch.usecase";
import {getBranchesFastifySchema} from "@/domain/branch/use-cases/get-branch/get-branch.schema";
import getAllBranchesUseCase from "@/domain/branch/use-cases/get-branch/get-branch.usecase";
import {getOneBranchFastifySchema} from "@/domain/branch/use-cases/getone-branch/getone-branch.schema";
import getOneBranchUseCase from "@/domain/branch/use-cases/getone-branch/getone-branch.usecase";



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
    .get(
      "/",
      {schema: getBranchesFastifySchema},
      async function (request:any,reply){
        const branches = await getAllBranchesUseCase();
        return branches;
      }
    )
    .get(
      "/:branchId",
      {schema: getOneBranchFastifySchema},
      async function (request:any,reply){
        const branchId = request.params.branchId;
        const branch = await getOneBranchUseCase(branchId);
        return branch;
      }
    )

  }


  export default branch;