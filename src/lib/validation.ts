import {z} from 'zod';

const requiredString = z.string().trim().min(1, "Required");

export const signUpSchema = z.object({
    email: requiredString.email("Invalid email."),
    username: requiredString.regex(
        /^[a-zA-Z0-9_]+$/,
        "Invalid username. Only letters, numbers, and underscores are allowed."
    ),
    password: requiredString.min(8, "Password must be at least 8 characters."),
});

export type SingUpValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
    username: requiredString,
    password: requiredString,
});

export type LoginValues = z.infer<typeof loginSchema>;