import { loginSchema } from "../schemas/login.schema";
import { z } from "zod";
import { User } from "./user";


export type LoginFields = z.infer<typeof loginSchema>

export interface LoginResponse {
    user: User,
    token: string
}