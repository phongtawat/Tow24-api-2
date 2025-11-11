import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares/validate.middleware.js";
import  {availabilitySchema,
  schemaParamsAvailability,
} from "../schemas/availability.schema.js";

const availabilityLogRouter = Router();

//create  availabilityLog
availabilityLogRouter.post(
  "/",
  validateBodyMiddleware(availabilitySchema),
  () => {}
);

// get all  availabilityLog
availabilityLogRouter.get("/", () => {});

//get one  availabilityLog
availabilityLogRouter.get(
  "/:availabilityId",
  validateBodyMiddleware(schemaParamsAvailability),
  () => {}
);

// update  availabilityLog
availabilityLogRouter.put(
  "/:availabilityId",
  validateBodyMiddleware(schemaParamsAvailability),
  () => {}
);

//delete  availabilityLog
availabilityLogRouter.delete(
  "/:availabilityId",
  validateBodyMiddleware(schemaParamsAvailability),
  () => {}
);

export default availabilityLogRouter;
