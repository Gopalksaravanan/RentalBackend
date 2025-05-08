import {
    FastifyPluginAsyncTypebox,
    TypeBoxTypeProvider,
  } from "@fastify/type-provider-typebox";


import { createSupplierFastifySchema } from "@/domain/supplier/use-cases/create-supplier/create-supplier.schema";
import createSupplierUseCase from "@/domain/supplier/use-cases/create-supplier/create-supplier.usecase";
import { getSupplierFastifySchema } from "@/domain/supplier/use-cases/get-supplier/get-suppplier.schema";
import getSupplierUseCase from "@/domain/supplier/use-cases/get-supplier/get-supplier.usecase";
import { getOneSupplierFastifySchema } from "@/domain/supplier/use-cases/getone-supplier/getone-supplier.schema";
import getOneSupplierUseCase from "@/domain/supplier/use-cases/getone-supplier/getone-supplier.usecase";
import { updateSupplierFastifySchema } from "@/domain/supplier/use-cases/update-supplier/update-supplier.schema";
import updateSupplierUseCase from "@/domain/supplier/use-cases/update-supplier/update-supplier.usecase";


  const supplier : FastifyPluginAsyncTypebox = async (fastify) : Promise<void> => {
    fastify
    .withTypeProvider<TypeBoxTypeProvider>()
    .post(
        "/",
        {schema: createSupplierFastifySchema},
        async function (request:any,reply){
            const createdSupplier = await createSupplierUseCase(request.body);
            return createdSupplier;
        }
    )
    .get(
        "/",
        {schema :getSupplierFastifySchema},
        async function (request:any,reply){
            const suppliers = await getSupplierUseCase();
            return suppliers;
        }
    )
    .get(
        "/:supplierId",
        {schema:getOneSupplierFastifySchema},
        async function (request:any,reply){
            const supplierId = request.params.supplierId;
            const supplier = await getOneSupplierUseCase(supplierId);
            return supplier;
        }
    )
    .put(
        "/:supplierId",
        {schema: updateSupplierFastifySchema},
        async function (request:any,reply){
            const supplierId = request.params.supplierId;
            const supplierBody = request.body;
            const updatedSupplier = await updateSupplierUseCase(supplierId,supplierBody);
            return updatedSupplier;
        }
    )
  }

    export default supplier;