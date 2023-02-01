import { Ticket } from "@prisma/client";
import { RequestHandler } from "express";
import { ResponseError, ResponseValidation } from "../../interfaces/interfaces";

type TTicketBody = Omit<Ticket, "id" | "createdAt" | "updatedAt">;

export default interface TicketsHandler {
  getAll: RequestHandler<null, Ticket[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Ticket | ResponseError, null>;
  create: RequestHandler<
    Record<string, any>,
    Ticket | ResponseError,
    TTicketBody
  >;
  delete: RequestHandler<{ id: string }, ResponseValidation, null>;
}
