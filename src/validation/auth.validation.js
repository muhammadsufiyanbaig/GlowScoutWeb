import { z } from "zod";

export const SignupSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",  
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export const ForgotSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
});


