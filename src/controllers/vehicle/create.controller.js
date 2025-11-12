import { createVehicle } from "../../services/vehicle.service.js";

export const createVehicleController = async (req, res) => {
    
    const data = req.body
    const userId = req.user.id

    const newVehicles = await createVehicle({...data, userId })

    res.status(201).json({ success: true, newVehicles});
}