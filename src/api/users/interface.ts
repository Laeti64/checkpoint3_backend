import { User } from "@prisma/client";
import { RequestHandler } from "express";
import { ResponseError, ResponseValidation } from "../../interfaces/interfaces";
import { TUserBody, TUserWithoutPassword } from "../../types/types";

export default interface UsersHandler {
  getAll: RequestHandler<null, TUserWithoutPassword[] | ResponseError, null>;
  getOne: RequestHandler<
    { id: string },
    TUserWithoutPassword | ResponseError,
    null
  >;
  delete: RequestHandler<{ id: string }, ResponseValidation, null>;
  update: RequestHandler<
    { id: string },
    TUserWithoutPassword | ResponseError,
    TUserBody
  >;
}
