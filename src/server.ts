import {
    AppError,
    errorHandler,
    fastifyErrorMiddleware,
  } from '@/lib/error-handling'
  // import { logger } from '@/lib/logger';
  import closeWithGrace from 'close-with-grace';
  import * as dotenv from 'dotenv';
  import Fastify from 'fastify';
  import { connectDB } from './data-access/config/connect-to-db';
  
  import app from './app';
  
  dotenv.config();
  
  const isProduction = process.env.NODE_ENV === 'dev';
  const server = Fastify({
    logger: !isProduction,
  });
  
  // Set Error Hanlder
  server.setErrorHandler(fastifyErrorMiddleware);
  
  // Register your application as a normal plugin.
  void server.register(app);
  
  // Delay is the number of milliseconds for the graceful close to finish
  // wait for all existing request to complete max time is one minute
  const closeListeners = closeWithGrace(
    { delay: 60 * 2 * 1000 },
    async (opts: any) => {
      console.log('Initiated gracefull shutdown');
      // if (opts.err) {
      //   logger.error(`${opts.err.message}, closing app...`);
      // }
  
      await server.close();
    },
  );
  
  server.addHook('onClose', (_instance, done) => {
    closeListeners.uninstall();
    done();
  });
  
  const PORT = Number(process.env.PORT ?? 9000);
  // Start listening.
  connectDB();
  server.listen(
    {
      port: PORT,
      host: process.env.SERVER_HOSTNAME,
    },
    (err: Error | null, address: string) => {
      if (err) {
        console.error(err);
        // logger.error(`Error listening server: ${err.message}`);
        process.exit(1);
      }
  
      // Here we integrate the error event listener
      errorHandler.listenToErrorEvents(server.server);
  
      // logger.info(`Server listening at ${address}`);
    },
  );
  
  server.ready(async (err) => {
    if (err) {
      await errorHandler.handleError(
        new AppError('startup-failure', err.message, 500, false, (err as Error & { cause?: unknown }).cause),
      );
  
      // logger.error(`Error starting server: ${err.message}`);
      process.exit(1);
    }
  
    // server.swagger();
  
    // logger.info('All routes loaded! Check your console for the route details.');
  
    console.log(server.printRoutes());
  
    // logger.info(`Server listening on port ${PORT}`);
  });
  export { server as app };
  