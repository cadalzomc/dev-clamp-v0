import { ZodUserRegister } from "@/lib/zods";
import { publicProcedure, router } from "@/server/trpc";
import { UserCreate } from "@/server/actions";
import { IPayloadUser } from "@/lib/models";

export const userRouter = router({
  create: publicProcedure.input(ZodUserRegister).mutation(async ({ input }) => await UserCreate(input as IPayloadUser)),
});
