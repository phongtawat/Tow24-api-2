import { deleteReview } from "../../services/review.service.js";

export const deleteReviewController = async (req, res, next) => {
  try {
    const { reviewId } = req.params;
    await deleteReview(reviewId);
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    next(error);
  }
};
