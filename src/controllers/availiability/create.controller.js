import { createAvailability } from "../../services/availability.service.js";

export const createAvailabilityController = async (req, res) => {
    
    const data = req.body
    const userId = req.user.id

    const newAvailability = await createAvailability({...data, userId })

    res.status(201).json({ success: true, newAvailability});
}