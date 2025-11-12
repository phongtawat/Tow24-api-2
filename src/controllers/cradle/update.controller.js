import { updateCradle } from "../../services/cradle.service.js";

export const updateCradleController = async (req, res) => {
  const { name, mobile, email } = req.body;
  const id = req.user

  const user = await updateCradle(id, { name, mobile, email})

  res.status(200).json({ success: true, user });
};