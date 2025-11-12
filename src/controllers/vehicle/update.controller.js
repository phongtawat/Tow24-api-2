import { updateVehicle } from "../../services/vehicle.service.js";

export const updateVehicleController = async (req, res) => {
  const { name, mobile, email } = req.body;
  const id = req.user

  const user = await updateVehicle(id, { name, mobile, email})

  res.status(200).json({ success: true, user });
};