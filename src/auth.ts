import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import login from "./features/auth/apis/auth.api";
import { loginSchema } from "./features/auth/schemas/login.schema";

const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        const result = loginSchema.safeParse({
          username: credentials?.username,
          password: credentials?.password,
        });
        if (!result.success) throw new Error("Invalid credentials");

        const resppnse = await login(result.data);

        if (!resppnse.status) throw new Error(resppnse.message);

        return {
          id: resppnse.payload.user.id,
          user: resppnse.payload.user,
          token: resppnse.payload.token,
        };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.user = user.user;
        token.token = user.token;
      }
      return token;
    },
    session: ({ session, token }) => {
      session.user = token.user;

      return session;
    },
  },
};

export default authOptions;
