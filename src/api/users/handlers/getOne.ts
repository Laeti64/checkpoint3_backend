import TicketsHandler from "../interface";
import prisma from "../../../../prisma/client";

const getOneUser: TicketsHandler["getOne"] = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUniqueOrThrow({
      where: { id },
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneUser;
