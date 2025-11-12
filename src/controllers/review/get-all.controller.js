import { findAllReviews } from "../../services/review.service.js";

export const getAllReviewsController = async (req, res, next) => {
  try {
    const reviews = await findAllReviews();
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};