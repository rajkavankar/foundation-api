import { z } from "zod"

export const authSchema = z.object({
  email: z
    .string({
      required_error: "Email is missing",
    })
    .email({ message: "Enter a valid email" }),
  name: z.string({
    required_error: "Name is missing",
  }),
  pic: z.string({
    required_error: "Pic is missing",
  }),
})
