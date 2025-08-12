import express from "express"
import AdminRouter from "./routes/Admin.js"
import UserRouter from "./routes/User.js"
import ProductRouter from "./routes/Product.js"

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//demo api
app.get("/", (req, res) => res.send("Server At Work"))

//router level middlewares
app.use("/admin", AdminRouter) //http://localhsot:7070/admin
app.use("/user", UserRouter) //http://localhsot:7070/user
app.use("/product", ProductRouter) //http://localhsot:7070/product

app.listen(7070, () => {
    console.log("server running at http://localhost:7070")
})