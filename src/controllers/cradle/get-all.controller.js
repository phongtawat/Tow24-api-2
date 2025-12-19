import { findAllCradle } from "../../services/cradle.service.js";

export const getAllCradleController = async (req, res) => {
    const cradles = await findAllCradle()
    console.log("cradle", cradles)
    res.status(200).json({ success: true, cradles });
}