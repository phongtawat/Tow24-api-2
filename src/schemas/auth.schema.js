import { z, ZodAny } from "zod"

const mobileRegex = /^[0-9]\d{8}$/;

export const registerSchema = z.object({
    name: z.string().min(1, "name is required").max(255),
    email: z.email().max(255).nullable(),
    mobile: z.string().refine((value) => mobileRegex.test(value), {
        message: "phone number is invalid",
    }),
    password: z.string().min(1, "password is required").max(255),
});

export const loginSchema = z.object({
    mobile: z.string().refine((value) => mobileRegex.test(value), {
        message: "phone number is invalid",
    }),
    password: z.string().min(1, "password is required").max(255),
});

export const userSchema = z.object({
    name: z.string().min(1, "name is required").max(255),
    email: z.email().max(255).nullable(),
    mobile: z.string().refine((value) => mobileRegex.test(value), {
        message: "phone number is invalid",
    }),
});