import { findAllVehicleByCradleId } from "../../services/vehicle.service.js";


export const getOneVehicleController = async (req, res) => {
    const VehicleId = req.params.cradleId;

    const Vehicle = await findAllVehicleByCradleId(VehicleId)

    if(!cradle) {
        throw createHttpError.NotFound("cradle not found")
    }

    res.status(200).json({success: true,Vehicle })
}