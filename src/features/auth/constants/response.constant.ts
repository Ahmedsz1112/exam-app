import { ErrorResponse } from "@/shared/types/api";

export const RESPONSE = {
  unauthorized: {
    status: false,
    message: "Unauthorized",
    code: 401,
  } as ErrorResponse,
};
