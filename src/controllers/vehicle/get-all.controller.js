import { findAllVehicle } from "../../services/vehicle.service.js";

export const getAllVehicleController = async (req, res) => {
    const vehicles = await findAllVehicle
    res.status(200).json({ success: true, vehicles });
}