import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactQueryProvider from "./Providers/react-query-provider";
import NextAuthProvider from "./Providers/next-auth.provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <NextAuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </NextAuthProvider>
    </ReactQueryProvider>
  );
}
