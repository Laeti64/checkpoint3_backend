import { RequestHandler } from "express";
import { ResponseError } from "../../interfaces/interfaces";
import {
  TLoginBody,
  TUserBody,
  TUserWithoutPassword,
} from "../../../types/types";
import { JwtPayload } from "jsonwebtoken";

export interface AuthHandler {
  signin: RequestHandler<
    null,
    TUserWithoutPassword | ResponseError,
    TLoginBody
  >;
  signup: RequestHandler<null, TUserWithoutPassword | ResponseError, TUserBody>;
  signout: RequestHandler<null, null, null, null>;
  me: RequestHandler<Record<any, string>, JwtPayload | ResponseError>;
}
