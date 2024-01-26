import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, "Too Short!").max(50, "Too Long!"),
    username: z.string().min(2).max(50),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password must be atleast 8 characters!"),
})