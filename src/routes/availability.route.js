import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares/validate.middleware.js";
import {
  availabilitySchema,
  schemaParamsAvailability,
} from "../schemas/availability.schema.js";
import { createCradleController } from "../controllers/cradle/create.controller.js";
import { getAllAvailabilityController } from "../controllers/availiability/get-all.controller.js";
import { getOneAvailabilityController } from "../controllers/availiability/get-one.controller.js";
import { updateAvailabilityController } from "../controllers/availiability/update.controller.js";
import { deleteAvailability } from "../services/availability.service.js";
import { createAvailabilityController } from "../controllers/availiability/create.controller.js";

const availabilityLogRouter = Router();

//create  availabilityLog
availabilityLogRouter.post(
  "/",
  validateBodyMiddleware(availabilitySchema),
  createAvailabilityController
);

// get all  availabilityLog
availabilityLogRouter.get("/", getAllAvailabilityController);

//get one  availabilityLog
availabilityLogRouter.get(
  "/:availabilityId",
  validateBodyMiddleware(schemaParamsAvailability),
  getOneAvailabilityController
);

// update  availabilityLog
availabilityLogRouter.put(
  "/:availabilityId",
  validateBodyMiddleware(schemaParamsAvailability),
  updateAvailabilityController
);

//delete  availabilityLog
availabilityLogRouter.delete(
  "/:availabilityId",
  validateBodyMiddleware(schemaParamsAvailability),
  deleteAvailability
);

export default availabilityLogRouter;
