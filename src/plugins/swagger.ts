import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import fp from "fastify-plugin";
// import { withRefResolver } from "fastify-zod";

export default fp(async (fastify) => {
  fastify.register(swagger, {
    openapi: {
      info: {
        title: "ybott-core-svc",
        description: "",
        version: "0.1.0",
      },
      servers: [
        {
          url: process.env.SWAGGER_BASE_URL || `http://localhost:9000`,
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
          },
        },
      },
    },
    hideUntagged: false,
  });
  fastify.register(swaggerUi);
});
