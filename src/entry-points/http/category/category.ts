import {
    FastifyPluginAsyncTypebox,
    TypeBoxTypeProvider,
  } from "@fastify/type-provider-typebox";


import { createCategoryFastifySchema } from "@/domain/category/use-cases/create-category/create-category.schema";
import createCategoryUseCase from "@/domain/category/use-cases/create-category/create-category.usecase";
import { getCategoryFastifySchema } from "@/domain/category/use-cases/get-category/get-category.schema";
import getCategoryUseCase from "@/domain/category/use-cases/get-category/get-category.usecase";
import { getOneCategoryFastifySchema } from "@/domain/category/use-cases/getone-category/getone-category.schema";
import getOneCategoryUseCase from "@/domain/category/use-cases/getone-category/getone-category.usecase";

   const category : FastifyPluginAsyncTypebox = async (fastify) : Promise<void> => {
    fastify
    .withTypeProvider<TypeBoxTypeProvider>()
    .post(
        "/",
        {
            schema : createCategoryFastifySchema
        },
        async function (request:any,reply){
            const createdCategory = await createCategoryUseCase(request.body);
            return createdCategory;
        }
    )
    .get(
        "/",
        {schema:getCategoryFastifySchema},
        async function (request:any,reply){
            const categories = await getCategoryUseCase();
            return categories;
        }
    )
    .get(
        "/:categoryId",
        {schema:getOneCategoryFastifySchema},
        async function (request:any,reply) {
            const categoryId = request.params.categoryId;
            const category = await getOneCategoryUseCase(categoryId);
            return category;
        }
    )


   }

   export default category;