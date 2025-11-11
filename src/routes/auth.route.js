import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares/validate.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";
import { registerController } from "../controllers/auth/register.controller.js";
import { loginController } from "../controllers/auth/login.controller.js";

const authRouter = Router();

authRouter.post(
  "/register",
  validateBodyMiddleware(registerSchema),
  registerController
);
authRouter.post("/login", validateBodyMiddleware(loginSchema), loginController);

export default authRouter;
