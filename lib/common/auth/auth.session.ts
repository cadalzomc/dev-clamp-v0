import { getServerSession, User } from "next-auth";
import options from "./auth.config";

export const GetUserSession = async (): Promise<User | undefined> => {
  const session = await getServerSession(options);
  return session?.user;
};
