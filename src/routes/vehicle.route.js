import {Router} from "express"

const vehicleRouter = Router()

// create vehicle
vehicleRouter.post('/', () => {});

//get all vehicle
vehicleRouter.get('/', () => {});

//get one vehicle
vehicleRouter.get('/:vehicleId', () => {});

// update vehicle
vehicleRouter.put('/:vehicleId', () => {});

//delete vehicle
vehicleRouter.delete('/:vehicleId', () => {});

export default vehicleRouter