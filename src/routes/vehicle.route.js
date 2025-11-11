import {Router} from "express"
import { validateBodyMiddleware } from "../middlewares/validate.middleware.js";
import { schemaParamsVehicle, vehicleSchema } from "../schemas/vehicle.schema.js";

const vehicleRouter = Router()

// create vehicle
vehicleRouter.post('/',validateBodyMiddleware(vehicleSchema), () => {});

//get all vehicle
vehicleRouter.get('/', () => {});

//get one vehicle
vehicleRouter.get('/:vehicleId',validateBodyMiddleware(schemaParamsVehicle), () => {});

// update vehicle
vehicleRouter.put('/:vehicleId',validateBodyMiddleware(schemaParamsVehicle), () => {});

//delete vehicle
vehicleRouter.delete('/:vehicleId',validateBodyMiddleware(schemaParamsVehicle), () => {});

export default vehicleRouter