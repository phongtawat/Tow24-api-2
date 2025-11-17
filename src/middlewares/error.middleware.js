export default (err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message =err.message || " internal server error"
    const details =err.details || null



    console.log(err)

    res.status(statusCode).json({ success: false, message, details})
}