import { RequestHandler } from "express";
import { ResponseError } from "../../interfaces/interfaces";
import { TLoginBody, TUserBody, TUserWithoutPassword } from "../../types/types";

export interface AuthHandler {
  signin: RequestHandler<
    null,
    TUserWithoutPassword | ResponseError,
    TLoginBody
  >;
  signup: RequestHandler<null, TUserWithoutPassword | ResponseError, TUserBody>;
  signout: RequestHandler<null, null, null, null>;
}
