import { User } from "@prisma/client";

export type TCategoryBody = {
  name: string;
};

export type TTicketBody = {
  title: string;
  description: string;
  linkedToProject: string;
  deadLine: Date;
  userName: string;
  categoryName: string;
};

export type TUserWithoutPassword = Omit<User, "password">;

export type TUserBody = Omit<User, "createdAt" | "updatedAt" | "id">;

export type TLoginBody = {
  email: string;
  password: string;
};
