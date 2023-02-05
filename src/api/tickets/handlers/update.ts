import TicketsHandler from "../interface";
import prisma from "../../../../prisma/client";

const ticketToUpdate: TicketsHandler["update"] = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      categoryId,
      deadLine,
      description,
      linkedToProject,
      title,
      userName,
    } = req.body;
    const updatedTicket = await prisma.ticket.update({
      where: { id },
      data: {
        title,
        category: { connect: { id: categoryId } },
        deadLine,
        description,
        user: { connect: { username: userName } },
        linkedToProject,
      },
    });
    res.status(200).json(updatedTicket);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default ticketToUpdate;
