import { registerSchema } from "../schemas/auth.schema.js"


export const register = async (req, res, next,) => {
    const { name, email, mobile, password} = req.body

    const user = registerSchema.parse(req.body)
}