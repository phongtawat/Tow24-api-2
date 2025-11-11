import {Router} from "express"

const reviewRouter = Router()

//create  review
reviewRouter.post('/', () => {})

// get all  review
reviewRouter.get('/', () => {})


// update  review
reviewRouter.put('/:reviewId', () => {})

//delete  review
reviewRouter.delete('/:reviewId', () => {})

export default reviewRouter