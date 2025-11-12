import { findAllAvailability } from "../../services/availability.service.js";

export const getAllAvailabilityController = async (req, res) => {
    const availabilityId = await findAllAvailability
    res.status(200).json({ success: true, availabilityId });
}