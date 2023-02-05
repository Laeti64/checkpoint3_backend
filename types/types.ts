import { User } from "@prisma/client";

export type TCategoryBody = {
  name: string;
};

export type TTicketBody = {
  title: string;
  description: string;
  linkedToProject: string;
  deadLine: string;
  userName: string;
  categoryId: string;
};

export type TUserWithoutPassword = Omit<User, "password">;

export type TUserBody = Omit<User, "createdAt" | "updatedAt" | "id">;

export type TLoginBody = {
  email: string;
  password: string;
};
