import { AuthHandler } from "../interfaces";
import prisma from "../../../../prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Cookies from "cookies";

const signup: AuthHandler["signup"] = async (req, res) => {
  const cookies = new Cookies(req, res, {
    secure: process.env.NODE_ENV === "production",
  });
  try {
    const { email, password, username } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        username,
      },
    });
    const { password: removedPassword, ...userWithoutPassword } = user;
    const secret = process.env.JWT_SECRET || "secret";
    const token = jwt.sign(userWithoutPassword, secret);
    cookies.set("token", `Bearer ${token}`, {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    });
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default signup;
