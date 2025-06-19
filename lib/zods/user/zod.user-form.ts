import { z } from "zod";

export const ZodUserRegister = z.object({
  name: z
    .string()
    .refine((val) => val.trim().length > 0, {
      message: "Required",
    })
    .refine((val) => val.length >= 3, {
      message: "Minimum of 3 characters",
    })
    .refine((val) => val.length <= 60, {
      message: "Maximum of 60 characters",
    }),
  email: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || z.string().email().safeParse(val).success, {
      message: "Invalid email",
    }),
  password: z
    .string()
    .trim()
    .refine((val) => val.trim().length > 0, {
      message: "Required",
    })
    .refine((val) => val.length >= 5, {
      message: "Minimum of 5 characters",
    })
    .refine((val) => val.length <= 30, {
      message: "Maximum of 30 characters",
    })
    .refine((val) => /[a-zA-Z]/.test(val) && /\d/.test(val), {
      message: "Required number and letters",
    }),
});
