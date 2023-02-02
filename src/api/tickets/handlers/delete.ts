import prisma from "../../../../prisma/client";
import TicketsHandler from "../interface";

const deleteTicket: TicketsHandler["delete"] = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTicket = await prisma.ticket.delete({
      where: { id },
    });
    res
      .status(200)
      .json({ message: `Ticket ${deletedTicket.title}has been deleted` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteTicket;
