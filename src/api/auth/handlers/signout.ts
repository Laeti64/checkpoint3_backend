import { AuthHandler } from "../interfaces";

const signout: AuthHandler["signout"] = async (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

export default signout;
