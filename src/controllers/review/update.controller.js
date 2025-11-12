import { updateReview } from "../../services/review.service.js";

export const updateReviewController = async (req, res, next) => {
  try {
    const { reviewId } = req.params;
    const data = req.body;
    const updated = await updateReview(reviewId, data);

    if (!updated) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json({ message: "Review updated", data: updated });
  } catch (error) {
    next(error);
  }
};