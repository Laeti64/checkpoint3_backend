import TicketsHandler from "../interface";
import prisma from "../../../../prisma/client";

const createTicket: TicketsHandler["create"] = async (req, res) => {
  try {
    const {
      categoryId,
      deadLine,
      description,
      linkedToProject,
      title,
      userName,
    } = req.body;
    const ticketToCreate = await prisma.ticket.create({
      data: {
        title,
        description,
        linkedToProject,
        deadLine,
        category: {
          connect: {
            id: categoryId,
          },
        },
        user: {
          connect: {
            username: userName,
          },
        },
      },
    });
    res.status(201).json(ticketToCreate);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createTicket;
