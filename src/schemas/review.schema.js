import { z } from "zod";

export const reviewSchema = z.object({
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
    .min(1, "comment is require" )
});

export const schemaParamsReviewId = z.object({
  reviewId: z.string().min(1, "review Id is required"),
})