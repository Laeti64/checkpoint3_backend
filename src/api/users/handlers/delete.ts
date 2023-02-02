import prisma from "../../../../prisma/client";
import TicketsHandler from "../interface";

const deleteUser: TicketsHandler["delete"] = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await prisma.user.delete({
      where: { id },
    });
    res
      .status(200)
      .json({ message: `User ${deletedUser.username}has been deleted` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteUser;
