import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { LoginFields } from "../types/auth";

export default function useLogin() {
  // mutation
  return useMutation({
    mutationFn: async (field: LoginFields) => {
      const response = await signIn("credentials", {
        username: field.username,
        password: field.password,
        redirect: false,
      });
      if (!response?.ok) {
        throw new Error(response?.error || "Login failed");
      }
      return response;
    },
    onSuccess: () => {
      const callBackURL =
        new URL(location.href).searchParams.get("callbackUrl") || "/";

      location.href = callBackURL;
    },
  });
}
