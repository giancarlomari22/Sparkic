import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(100, "Name is too long."),
  email: z.email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message cannot exceed 500 characters."),
});

export type ContactSchema = z.infer<typeof contactSchema>;

export const jobApplicationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.email("Please enter a valid email address."),
  phone: z.string().min(6, "Please enter a valid phone number."),
  linkedin: z.string().optional(),
  github: z.string().optional(),
});

export type JobApplicationSchema = z.infer<typeof jobApplicationSchema>;
