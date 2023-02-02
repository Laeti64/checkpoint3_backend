import { Category } from "@prisma/client";
import { RequestHandler } from "express";
import { ResponseError, ResponseValidation } from "../../interfaces/interfaces";
import { TCategoryBody } from "../../../types/types";

export default interface CategoriesHandler {
  getAll: RequestHandler<null, Category[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Category | ResponseError, null>;
  create: RequestHandler<
    Record<string, any>,
    Category | ResponseError,
    TCategoryBody
  >;
  delete: RequestHandler<{ id: string }, ResponseValidation, null>;
  update: RequestHandler<
    { id: string },
    Category | ResponseError,
    TCategoryBody
  >;
}
