import "next-auth";
import { User as UserType } from "./user";
import "next-auth/jwt";
import "next-auth";

declare module "next-auth" {
  interface User {
    user: UserType;
    token: string;
  }

  interface Session {
    user: UserType;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: UserType;
    token: string;
  }
}
