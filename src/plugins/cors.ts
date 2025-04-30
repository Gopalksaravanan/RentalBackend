import fp from 'fastify-plugin';
import cors from '@fastify/cors';
export default fp(async (fastify) => {
  fastify.register(cors, {
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:3002',
    ],
    credentials: true,
  });
});
