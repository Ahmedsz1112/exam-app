"server-only";

import { HEADERS } from "@/shared/constants/api.constant";
import { APIResponse } from "@/shared/types/api";
import { LoginFields, LoginResponse } from "../types/auth";

const login = async (loginFields: LoginFields) => {
  const response = await fetch(`${process.env.API}/api/auth/login`, {
    method: "POST",
    headers: {
      ...HEADERS.jsonbody,
    },
    body: JSON.stringify(loginFields),
  });

  const payload: APIResponse<LoginResponse> = await response.json();

  return payload;
};

export default login;
