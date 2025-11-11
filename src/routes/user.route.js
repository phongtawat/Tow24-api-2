import {Router} from "express"
import { validateBodyMiddleware } from "../middlewares/validate.middleware.js";
import { userSchema } from "../schemas/auth.schema.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { meController } from "../controllers/user/me.controller.js";
import { updateUserController } from "../controllers/user/update.controller.js";

const userRouter = Router()

userRouter.get('/me',authenticate, meController);
userRouter.put('/', validateBodyMiddleware(userSchema),authenticate, updateUserController);

export default userRouter