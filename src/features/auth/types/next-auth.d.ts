import "next-auth";
import { User as UserType } from "./user";
import "next-auth/jwt";
import { User } from "next-auth";

declare module "next-auth" {

  interface User {
    user: UserType;
    token: string;
  }

  type Session = UserType;
}

declare module "next-auth/jwt" {
  type JWT = User
}
