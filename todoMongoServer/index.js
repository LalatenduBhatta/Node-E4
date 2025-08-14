import express from "express"
import morgan from "morgan"
import cors from "cors"
import cookieParser from "cookie-parser"
import dbConnect from "./config/db.js"
import userRouter from "./routes/userRouter.js"
import todoRouter from "./routes/todoRouter.js"
const app = express()
//middlewares
app.use(express.json()) //json parser
app.use(morgan("dev")) // http logger
app.use(cookieParser()) // cookie parser
app.use(cors({ origin: "http://localhost:5173" }))

//routes
app.get("/", (req, res) => res.send("Server At Work")) //demo route

app.use("/user", userRouter) //!user routes

app.use("/todo", todoRouter) //!todo routes

//dbConnection
dbConnect()

//listen
app.listen(9000, () => {
    console.log("server listening to port 9000")
})