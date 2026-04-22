"use client";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { LoginFields } from "../../types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/login.schema";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";
import useLogin from "../../hooks/use-login";

export default function LoginForm() {
  //mutation
  const { mutate: login, isPending, error } = useLogin();

  //Form
  const form = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFields> = (data) => {
    login(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* username */}
      <FieldGroup>
        <Controller
          name="username"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="username">Name</FieldLabel>
              <Input
                {...field}
                id="username"
                placeholder="username"
                autoComplete="username"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      {/* password */}
      <FieldGroup className="mt-4">
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                type="password"
                {...field}
                id="password"
                placeholder="********"
                autoComplete="current-password"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      {/* forget password */}
      <Link
        href="/forgot-password"
        className="mt-2.5 text-sm text-blue-600 font-medium"
      >
        Forget Password?
      </Link>

      {/* error message */}
      {error?.message && <p className="text-sm text-red-500 font-medium">{error?.message}</p>}

      {/* submit button */}
      <Button
        disabled={
          isPending || (form.formState.isSubmitting && !form.formState.isValid)
        }
        type="submit"
        className="w-full"
      >
        Submit
      </Button>
    </form>
  );
}
