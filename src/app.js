import express from "express"
import cors from 'cors'
import helmet from 'helmet'
import morgan from "morgan"
import compression from "compression"
import notFoundMiddleware from "./middlewares/not-found.middleware.js"
import errorMiddleware from "./middlewares/error.middleware.js"
import mainRouter from "./routes/main.route.js"

const app = express()

// middleware third party
app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
app.use(compression())

//middleware built-in
app.use(express.json());

//routes
app.get('/h', (req, res) => {
    res.status(200).json({ message: "server ok"})
})

app.use('/api', mainRouter)

//middleware notfound
app.use(notFoundMiddleware)

//middleware error
app.use(errorMiddleware)

export default app;