import { updateUser } from "../../services/user.service.js";

export const updateUserController = async (req, res) => {
  const { name, mobile, email } = req.body;
  const id = req.user

  const user = await updateUser(id, { name, mobile, email})

  res.status(200).json({ success: true, user });
};
