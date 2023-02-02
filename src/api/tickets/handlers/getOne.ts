import TicketsHandler from "../interface";
import prisma from "../../../../prisma/client";

const getOneTicket: TicketsHandler["getOne"] = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await prisma.ticket.findUniqueOrThrow({
      where: { id },
    });
    res.status(200).json(ticket);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneTicket;
