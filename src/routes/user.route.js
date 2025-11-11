import {Router} from "express"
import { validateBodyMiddleware } from "../middlewares/validate.middleware.js";
import { userSchema } from "../schemas/auth.schema.js";

const userRouter = Router()

userRouter.get('/me', () => {});
userRouter.put('/', validateBodyMiddleware(userSchema), () => {});

export default userRouter