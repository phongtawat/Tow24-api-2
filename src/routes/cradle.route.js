import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares/validate.middleware.js";
import { cradleSchema, schemaParamsCradle } from "../schemas/cradle.schema.js";

const cradleRouter = Router();

//create cradle
cradleRouter.post("/", validateBodyMiddleware(cradleSchema), () => {});

//get all cradle
cradleRouter.get("/", () => {});

//get one cradle
cradleRouter.get(
  "/:cradleId",
  validateBodyMiddleware(schemaParamsCradle),
  () => {}
);

//update cradle
cradleRouter.put(
  "/:cradleId",
  validateBodyMiddleware(schemaParamsCradle),
  () => {}
);

//delete cradle
cradleRouter.delete(
  "/:cradleId",
  validateBodyMiddleware(schemaParamsCradle),
  () => {}
);

export default cradleRouter;
