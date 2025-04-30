
import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';
import { covertUnknownToAppError, errorHandler } from './error-handler';
import { createErrorResponse } from '@/data-access/config/responses';
import { STATUS_CODES } from '@/data-access/config/responseCode';

export function fastifyErrorMiddleware(
  error: FastifyError,
  _request: FastifyRequest,
  reply: FastifyReply,
) {
  // The error strategy is to assume that errors that happened during a request are not fatal (vs errors that happened during the app initialization)
  const standardAppError = covertUnknownToAppError(error);
  standardAppError.isCatastrophic = false;
  const statusCode = errorHandler.handleError(standardAppError) ?? STATUS_CODES.internalServerError.code;
  reply.status(statusCode).send(createErrorResponse({ code: statusCode }, standardAppError?.message));
}
