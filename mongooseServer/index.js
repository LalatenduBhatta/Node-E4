import express from "express"
import mongoose from "mongoose"

const app = express()

//middlewares
app.use(express.json())

//db connection
mongoose.connect("mongodb://127.0.0.1:27017/mongooseServer")
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.log("error in db connection", err))

//model connection
//!schema
let userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: {
        city: String,
        pin: Number,
        state: String
    }
})
//!model
let User = mongoose.model("users", userSchema)

//routes
app.get("/allusers", async (req, res) => {
    let allUsers = await User.find()
    res.send(allUsers)
})

app.post("/adduser", async (req, res) => {
    try {
        let userDetails = req.body
        await User.insertOne(userDetails)
        res.status(201).send({ message: "User Data Saved In Database" })
    } catch (error) {
        res.status(500).send({ error: "Something Went Wrong", msg: error.message })
    }
})

app.put("/update", async (req, res) => {
    try {
        let { email } = req.query
        let data = req.body
        let isEmail = await User.findOne({ email })
        if (isEmail) {
            await User.updateOne({ email }, { $set: { ...data } })
            res.status(200).send({ message: "User Data Updated" })
        } else {
            res.status(400).send({ error: "Email is Not Found" })
        }
    } catch (error) {
        res.status(500).send({ error: "Something Went Wrong", msg: error.message })
    }
})

app.delete("/delete/:id", async (req, res) => {
    try {
        let { id } = req.params
        let isUser = await User.findOne({ _id: id })
        if (isUser) {
            await User.deleteOne({ _id: id })
            res.status(200).send({ message: "User Data Deleted" })
        } else {
            res.status(400).send({ error: "Email is Not Found" })
        }
    } catch (error) {
        res.status(500).send({ error: "Something Went Wrong", msg: error.message })
    }
})


app.listen(5050, () => {
    console.log("Server running at http://localhsot:5050")
})