import express from "express"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import dbConnect from "./config/db.js"
import userRouter from "./routes/userRouter.js"
const app = express()
//middlewares
app.use(express.json()) //json parser
app.use(morgan("dev")) // http logger
app.use(cookieParser()) // cookie parser

//routes
app.get("/", (req, res) => res.send("Server At Work")) //demo route

app.use("/user", userRouter) //user routes

//dbConnection
dbConnect()

//listen
app.listen(9000, () => {
    console.log("server listening to port 9000")
})