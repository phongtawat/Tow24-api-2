import { createCradle } from "../../services/cradle.service.js";

export const createCradleController = async (req, res) => {
    // const {nameCradle,branch,province,district,latitude,longitude,} = req.body
    const data = req.body
    const userId = String(req.user.id)

   

    const newCradle = await createCradle({...data, userId })
     console.log("newCradle",newCradle)
    
    res.status(201).json({ success: true, newCradle});
}