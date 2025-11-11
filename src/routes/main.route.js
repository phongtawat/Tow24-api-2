import {Router} from "express"
import authRouter from "./auth.route.js";
import userRouter from "./user.route.js";
import cradleRouter from "./cradle.route.js";
import vehicleRouter from "./vehicle.route.js";
import availabilityLogRouter from "./availability.route.js";
import reviewRouter from "./review.route.js";

const mainRouter = Router()

mainRouter.use('/auth', authRouter);
mainRouter.use('/user', userRouter);

//อู่
mainRouter.use('/cradle', cradleRouter);

//Vehicle 
mainRouter.use('/Vehicle',vehicleRouter);

//AvailabilityLog
mainRouter.use('/Availability-Log',availabilityLogRouter);

//Review
mainRouter.use('/Review',reviewRouter);


export default mainRouter;