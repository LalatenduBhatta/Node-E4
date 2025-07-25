import express from "express"
import multer from "multer"

const app = express()

//multer upload dest
// const upload = multer({ dest: "./assets" })
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./assets")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

//middleware
app.use(express.json()) //json parser
app.use(express.urlencoded({ extended: true }))

//api / routes
app.get("/", (req, res) => {
    res.send("THE SERVER IS WORKING")
})
app.get("/student", (req, res) => {
    res.status(400).send({ name: "Rocky", age: 24 })
})
app.post("/newStudent", (req, res) => {
    console.log(req.body) //json
    res.send({ message: "Data recieved" })
})
app.post("/user", (req, res) => {
    console.log(req.body) //urlencoded
})

app.get("/product/:id/:color", (req, res) => {
    console.log(req.params)
    res.send({ message: "Product id API" })
})

app.post("/course", (req, res) => {
    console.log(req.query)
    res.send({ message: "Course API" })
})

app.post("/profile", upload.single("profilePic"), (req, res) => {
    console.log(req.body)
})

app.listen(8000, () => {
    console.log("Server working on http://localhost:8000")
})