import TicketsHandler from "../interface";
import prisma from "../../../../prisma/client";
import bcrypt from "bcrypt";
import UsersHandler from "../interface";

const userToUpdate: UsersHandler["update"] = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, role, username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        email,
        role,
        username,
        password: hashedPassword,
      },
    });
    const { password: removedPassword, ...userWithoutPassword } = updatedUser;
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default userToUpdate;
