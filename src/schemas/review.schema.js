import { z } from "zod";

const reviewSchema = z.object({
  rating: z
    .string()
    .min(1, "Rating is required")
    .transform((val) => parseInt(val))
    .refine((val) => !isNaN(val) && val >= 1 && val <= 5, {
      message: "Rating must be a number between 1 and 5",
    }),

  comment: z
    .string()
    .max(500, "Comment must be less than 500 characters")
    .optional()
    .or(z.literal("")), // อนุญาตให้เป็นค่าว่างได้

  createdAt: z
    .string()
    .optional()
    .transform((val) => (val ? new Date(val) : new Date())),

  updatedAt: z
    .string()
    .optional()
    .transform((val) => (val ? new Date(val) : new Date())),
});

export default reviewSchema;