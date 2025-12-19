import { createCradle } from "../../services/cradle.service.js";

export const createCradleController = async (req, res) => {
    // const {nameCradle,branch,province,district,latitude,longitude,} = req.body
    const data = req.body
    const userId = req.user.id

    console.log("data",data)
    console.log("userId",userId)



   

    const newCradle = await createCradle({...data, userId })
     console.log("newCradle",newCradle)
    
    res.status(201).json({ success: true, newCradle});
}