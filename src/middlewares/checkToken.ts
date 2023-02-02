import Cookies from "cookies";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const getToken = (req: Request, res: Response) => {
  const cookies = new Cookies(req, res);
  const headerToken = req.headers["authorization"]?.split(" ")[1];
  const headerCookie = cookies.get("token")?.split(" ")[1];
  return headerToken || headerCookie;
};
const checkToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = getToken(req, res);

  if (!token) {
    return res.status(404).json("please sign in");
  }

  const secret = process.env.JWT_SECRET || "secret";

  const decodedToken = jwt.verify(token, secret);

  if (typeof decodedToken === "string") {
    throw new Error(decodedToken);
  }
  req.user = decodedToken;
  next();
};

export default checkToken;
