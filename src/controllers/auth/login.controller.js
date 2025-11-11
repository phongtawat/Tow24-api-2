import createHttpError from "http-errors";
import { findUserByMobile } from "../../services/user.service.js";
import { verifyPassword } from "../../services/hash.service.js";
import { genToken } from "../../services/jwt.service.js";


export const loginController = async (req, res) => {
  const { mobile, password } = req.body;
  console.log("req.body-----", req.body);

    //find user by mobile
      const existUser = await findUserByMobile(mobile);
      console.log('existUser', existUser)
    
      if (!existUser) {
        throw createHttpError.BadRequest("mobile or password invalid");
      }

      // check password
      const isCheckPassword = await verifyPassword(existUser.password, password)
      console.log("isCheckPassword----", isCheckPassword);

      if(!isCheckPassword) {
        throw createHttpError.BadRequest("mobile or password invalid !");
      }

      const payload = {sub: existUser.id};

      const accessToken = genToken(payload);
      console.log("accessToken", accessToken);

  res.status(200).json({ success: true, message: "login successful" });
};
