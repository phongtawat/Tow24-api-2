import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares/validate.middleware.js";
import { cradleSchema, schemaParamsCradle } from "../schemas/cradle.schema.js";
import { createCradleController } from "../controllers/cradle/create.controller.js";
import { getAllCradleController } from "../controllers/cradle/get-all.controller.js";
import { getOneCradleController } from "../controllers/cradle/get-one.controller.js";

const cradleRouter = Router();

//create cradle
cradleRouter.post("/", validateBodyMiddleware(cradleSchema),createCradleController);

//get all cradle
cradleRouter.get("/", getAllCradleController);

//get one cradle
cradleRouter.get(
  "/:cradleId",
  validateBodyMiddleware(schemaParamsCradle),
  getOneCradleController
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
