import { TAny, TArray, TIntersect, TObject, TSchema, Type } from "@sinclair/typebox";
import { STATUS_CODES } from "./responseCode";
import { AppError } from "@/lib/error-handling";
import { FastifyReply } from "fastify";
const packageJson = require('../../../package.json');

const packageVersion = {
  version : '1.0.005'
}

export const createSuccessResponse = (
  statusCodeObject: any,
  message: string,
  data: any,
  options?: { includeMsgKey?: boolean; status?: string; serviceMeta?: any; spMeta?: any; transactionId?: string; }
) => {
  return {
    timestamp: new Date(),
    statusCode: statusCodeObject?.code || 200,
    status: statusCodeObject?.name || "OK",
    message: message || "Success",
    success: true,
    packageVersion:packageJson?.version,
    data: data || {},
    ...(options?.transactionId && { transactionId: options.transactionId }),
    ...(options?.serviceMeta && { serviceMeta: options.serviceMeta }),
    ...(options?.spMeta && { spMeta: options.spMeta }),
  };
};

export const createErrorResponse = (statusCodeObject: any, message: string,  options?: { serviceMeta?: any; spMeta?: any , transactionId?: string;},) => {
  return {
    timestamp: new Date(),
    statusCode: statusCodeObject?.code || 500,
    status: statusCodeObject?.name || "Internal Server Error",
    message: message || "Error",
    success: false,
    packageVersion:packageJson?.version,
    ...(options?.transactionId && { transactionId: options.transactionId }),
    ...(options?.serviceMeta && { serviceMeta: options.serviceMeta }),
    ...(options?.spMeta && { spMeta: options.spMeta }),
  };
};

export function SuccessResponseDecorator(dataSchema: TObject | TArray | TAny| TIntersect) {
  return Type.Object({
    timestamp: Type.Union([Type.String(), Type.Date()]),
    statusCode: Type.Number(),
    status: Type.String(),
    message: Type.String(),
    success: Type.Boolean(),
    data: dataSchema,
    packageVersion:Type.String()

  });
}

export function commonFastifyErrorDecorator(){
  return Type.Object({
    statusCode: Type.Number(),
    code: Type.String(),
    message: Type.String(),
    error: Type.String(),
  });
}
export function ErrorResponseDecorator() {
  return Type.Object({
    timestamp: Type.Union([Type.String(), Type.Date()]),
    statusCode: Type.Number(),
    status: Type.String(),
    message: Type.String(),
    success: Type.Boolean(),
    packageVersion:Type.String()

  });
}


export function PaginationSuccessResponseDecorator(dataSchema: TSchema){
  
  return SuccessResponseDecorator(Type.Object({
    results: Type.Array(dataSchema),
    totalResults: Type.Optional(Type.Number()),
    totalPages: Type.Optional(Type.Number()),
    currentPage: Type.Optional(Type.Number()),
  }))
}

export const errorResponseHandler = (error: any)=> {
  console.error(error);
    
  const errorObj = error instanceof AppError? {code: error.HTTPStatus, name: error.name} :  STATUS_CODES.internalServerError;
  return createErrorResponse(errorObj, error.message);
}

export const sendErrorResponse = (error: any,reply: FastifyReply)=>{
  const errorResponse = errorResponseHandler(error)
  return reply.send(errorResponse.statusCode).send(errorResponse);
}