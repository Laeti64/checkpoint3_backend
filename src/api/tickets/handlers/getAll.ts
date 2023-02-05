import TicketsHandler from "../interface";
import prisma from "../../../../prisma/client";

const getAllTickets: TicketsHandler["getAll"] = async (req, res) => {
  try {
    const tickets = await prisma.ticket.findMany({
      where: {
        status: {
          not: "CLOSED",
        },
      },
      include: {
        user: true,
        category: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    res.status(200).json(tickets);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllTickets;
