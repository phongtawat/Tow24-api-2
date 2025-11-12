import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares/validate.middleware.js";
import {
  reviewSchema,
  schemaParamsReviewId,
} from "../schemas/review.schema.js";
import { createReviewController } from "../controllers/review/create.controller.js";
import { getAllReviewsController } from "../controllers/review/get-all.controller.js";
import { updateReviewController } from "../controllers/review/update.controller.js";
import { deleteReviewController } from "../controllers/review/delete.controller.js";

const reviewRouter = Router();

//create  review
reviewRouter.post(
  "/",
  validateBodyMiddleware(reviewSchema),
  createReviewController
);

// get all  review
reviewRouter.get("/", getAllReviewsController);

// update  review
reviewRouter.put(
  "/:reviewId",
  validateBodyMiddleware(schemaParamsReviewId),
  updateReviewController
);

//delete  review
reviewRouter.delete(
  "/:reviewId",
  validateBodyMiddleware(schemaParamsReviewId),
  deleteReviewController
);

export default reviewRouter;
