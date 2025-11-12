import { findAllAvailabilityByCradleId } from "../../services/availability.service.js";

export const getOneAvailabilityController = async (req, res) => {
    const availabilityId = req.params.cradleId;

    const availability = await findAllAvailabilityByCradleId(availabilityId)

    if(!cradle) {
        throw createHttpError.NotFound("cradle not found")
    }

    res.status(200).json({success: true,availability })
}