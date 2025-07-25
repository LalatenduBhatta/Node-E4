import express from "express"

const app = express()

//middlewares
app.use(express.json()) //parsing json data

app.use(express.static("./public")) //server static file from a folder

app.use(express.urlencoded({ extended: true })) //parse url encoded data

//routes
app.get("/", (req, res) => {
    res.sendFile("C:/Users/HP/OneDrive/Desktop/Node E4/expressServer3/public/pages/Home.html")
})

app.post("/submitform", (req, res) => {
    console.log(req.body)
    res.send({ message: "Data Recieved" })
})


app.listen(4000, () => {
    console.log("server is running at http://localhost:4000")
})