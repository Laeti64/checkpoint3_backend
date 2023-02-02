import { Ticket } from "@prisma/client";
import { RequestHandler } from "express";
import { ResponseError, ResponseValidation } from "../../interfaces/interfaces";
import { TTicketBody } from "../../types/types";

export default interface TicketsHandler {
  getAll: RequestHandler<null, Ticket[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Ticket | ResponseError, null>;
  create: RequestHandler<
    Record<string, any>,
    Ticket | ResponseError,
    TTicketBody
  >;
  delete: RequestHandler<{ id: string }, ResponseValidation, null>;
  update: RequestHandler<{ id: string }, Ticket | ResponseError, TTicketBody>;
}
