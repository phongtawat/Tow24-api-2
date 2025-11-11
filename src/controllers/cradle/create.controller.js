import { createCradle } from "../../services/cradle.service.js";

export const createCradleController = async (req, res) => {
    // const {nameCradle,branch,province,district,latitude,longitude,} = req.body
    const data = req.body
    const userId = req.user.id

    const newCradle = await createCradle({...data, userId })

    res.status(201).json({ success: true, newCradle});
}