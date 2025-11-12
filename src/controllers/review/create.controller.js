import { createReview } from "../../services/review.service.js";

export const createReviewController = async (req, res, next) => {
  try {
    const data = req.body;
    const newReview = await createReview(data);
    res.status(201).json({ message: "Review created", data: newReview });
  } catch (error) {
    next(error);
  }
};