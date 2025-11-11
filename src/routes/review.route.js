import {Router} from "express"
import { validateBodyMiddleware } from "../middlewares/validate.middleware.js"
import { reviewSchema, schemaParamsReviewId } from "../schemas/review.schema.js"

const reviewRouter = Router()

//create  review
reviewRouter.post('/',validateBodyMiddleware(reviewSchema), () => {})

// get all  review
reviewRouter.get('/', () => {})


// update  review
reviewRouter.put('/:reviewId',validateBodyMiddleware(schemaParamsReviewId), () => {})

//delete  review
reviewRouter.delete('/:reviewId',validateBodyMiddleware(schemaParamsReviewId), () => {})

export default reviewRouter