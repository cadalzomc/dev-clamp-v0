import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import bcrypt from "bcrypt";
import type { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Users from "@/lib/models/mongo/mongo.user";
import db from "@/lib/common/db/db.adapter";
import { MongoDbConnect } from "@/lib/common/db/db.conn";

const SECRET =
  process.env.NEXTAUTH_SECRET || "m6VvFq55P2L5SUpy+2zgY972eX9eHyPyKp9EqFvyHQ0=";

export default {
  adapter: MongoDBAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          if (!credentials) return null;

          await MongoDbConnect();

          const { email, password } = credentials;
          const user = await Users.findOne({ email }).lean();

          if (!user) return null;

          const match = await bcrypt.compare(password, user.password);

          if (!match) return null;

          const currentUser: User = {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            image: user.photo,
          };

          return currentUser;
        } catch (error) {
          console.error("[Auth]", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      if (trigger === "update") {
        token.name = user.name;
        token.role = session.role;
        token.access = session.access;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub;
        session.user.name = token.name;
      }
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
  cookies: {
    pkceCodeVerifier: {
      name: "next-auth.pkce.code_verifier",
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        secure: true,
      },
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 4 * 60 * 60,
  },
  jwt: {
    secret: SECRET,
  },
} satisfies AuthOptions;
