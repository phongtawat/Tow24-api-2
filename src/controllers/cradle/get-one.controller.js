import { findAllCradleByCradleId } from "../../services/cradle.service.js";
import createHttpError from "http-errors";


export const getOneCradleController = async (req, res) => {
    const cradleId = req.params.cradleId;

    const cradle = await findAllCradleByCradleId(cradleId)

    if(!cradle) {
        throw createHttpError.NotFound("cradle not found")
    }

    res.status(200).json({success: true,cradle })
}