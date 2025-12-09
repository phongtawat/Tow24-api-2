import { hashPassword } from "../../services/hash.service.js";
import { createUser, findUserByMobile } from "../../services/user.service.js";
import createHttpError from "http-errors";

export const registerController = async (req, res) => {
  console.log('firreq.bodyst',req.body)
  const { name, email, mobile, password } = req.body;


  //find user by mobile
  const existUser = await findUserByMobile(mobile);

  if (existUser) {
    throw createHttpError.Conflict("alredy exist user");
  }

  const hash_Password = await hashPassword(password);

  const data = { name, email, mobile, password: hash_Password };


  const newUser = await createUser(data);
 
  console.log("newUser", newUser)
  
  res
    .status(201)
    .json({ success: true, message: "register successful" });
};
