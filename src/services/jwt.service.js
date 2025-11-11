import jwt from "jsonwebtoken"

export const genToken = (payload) => {
    return jwt.sign(payload,process.env.JWT_SECRET_TOKEN, {
        expiresIn: "1d",
        algorithm: "HS256"
    })
}

export const verifyToken = (token) => {
    return jwt.verify(token,process.env.JWT_SECRET_TOKEN, );
}