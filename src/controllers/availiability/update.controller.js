import { updateAvailability } from "../../services/availability.service.js";

export const updateAvailabilityController = async (req, res) => {
  const { name, mobile, email } = req.body;
  const id = req.user

  const user = await updateAvailability(id, { name, mobile, email})

  res.status(200).json({ success: true, user });
};