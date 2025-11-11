import createHttpError from "http-errors";
import { verifyToken } from "../services/jwt.service.js";
import { findUserById } from "../services/user.service.js";


export const authenticate = async (req, res, next) => {
    const headerToken = req.header.authorization

    if(!headerToken || headerToken.startsWith("Bearer")){
        throw createHttpError.Unauthorized("Unauthorized !")
    }

    const token = headerToken.split(" ")[1]

    const payload = verifyToken(token)

    console.log("payload", payload);

    const existUser = await findUserById(payload.sub)

    req.user = existUser

    next();
}