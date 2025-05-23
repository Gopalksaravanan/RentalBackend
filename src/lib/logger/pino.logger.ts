import {
    pino,
    type DestinationStream,
    type Logger as PinoLoggerImpl,
  } from 'pino';
  import { type LOG_LEVELS, type Logger } from './definition';
  
  export default class PinoLogger implements Logger {
    readonly #logger: PinoLoggerImpl;
  
    constructor(
      private readonly level: LOG_LEVELS,
      private readonly prettyPrintEnabled: boolean,
      private readonly destStream?: DestinationStream | string,
    ) {
      this.#logger = pino({
        level,
        transport: prettyPrintEnabled
          ? {
            target: "pino-pretty",
            options: {
              colorize: true,
              sync: true,
            },
          }
          : undefined,
      });
    }
  
    debug(message: string, metadata?: Record<string, unknown>): void {
      if (metadata) {
        this.#logger.debug(metadata, message);
      } else {
        this.#logger.debug(message);
      }
    }
  
    error(message: string, metadata?: Record<string, unknown>): void {
      if (metadata) {
        this.#logger.error(metadata, message);
      } else {
        this.#logger.error(message);
      }
    }
  
    info(message: string, metadata?: Record<string, unknown>): void {
      if (metadata) {
        this.#logger.info(metadata, message);
      } else {
        this.#logger.info(message);
      }
    }
  
    warning(message: string, metadata?: Record<string, unknown>): void {
      if (metadata) {
        this.#logger.warn(metadata, message);
      } else {
        this.#logger.warn(message);
      }
    }
  }
  