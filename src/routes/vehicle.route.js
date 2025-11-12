import {Router} from "express"
import { validateBodyMiddleware } from "../middlewares/validate.middleware.js";
import { schemaParamsVehicle, vehicleSchema } from "../schemas/vehicle.schema.js";
import { createVehicleController } from "../controllers/vehicle/create.controller.js";
import { getAllVehicleController } from "../controllers/vehicle/get-all.controller.js";
import { updateVehicleController } from "../controllers/vehicle/update.controller.js";
import { getOneVehicleController } from "../controllers/vehicle/get-one.controller.js";
import { deleteVehicle } from "../services/vehicle.service.js";

const vehicleRouter = Router()

// create vehicle
vehicleRouter.post('/',validateBodyMiddleware(vehicleSchema), createVehicleController);

//get all vehicle
vehicleRouter.get('/', getAllVehicleController);

//get one vehicle
vehicleRouter.get('/:vehicleId',validateBodyMiddleware(schemaParamsVehicle), getOneVehicleController);

// update vehicle
vehicleRouter.put('/:vehicleId',validateBodyMiddleware(schemaParamsVehicle), updateVehicleController);

//delete vehicle
vehicleRouter.delete('/:vehicleId',validateBodyMiddleware(schemaParamsVehicle), deleteVehicle);

export default vehicleRouter