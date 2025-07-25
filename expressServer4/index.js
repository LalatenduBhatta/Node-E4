import express from "express";
import cors from "cors"

const app = express()

//middleware
app.use(express.json()) //json parser

app.use(cors({
    origin: "http://localhost:5173"
})) //solves cross origin policy

//api
app.get("/", (req, res) => {
    res.send({ message: "Server is Working" })
})

app.listen(2000, () => {
    console.log("Server Running At http://localhost:2000")
})