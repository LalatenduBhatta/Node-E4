import express from "express"
// import fs from "fs"

const app = express()

//middleware
app.use(express.json()) // to parse json body data

//route // api
app.get("/", (req, res, next) => {
    // let data = fs.readFileSync("./pages/Home.html", "utf-8")
    // // res.end(data)
    // res.send(data)
    res.sendFile("C:/Users/HP/OneDrive/Desktop/Node E4/expressServer2/pages/Home.html")
})

app.get("/getData", (req, res) => {
    // res.end(JSON.stringify({ name: "Siraj", age: 28 }))
    res.status(201)
    res.send({ name: "Jadeja", age: 35, address: "India" })
})

app.post("/sendData", (req, res) => {
    // console.log(req.url, req.method)
    // console.log(req.headers)

    // req.on("data", (data) => {
    //     console.log(data.toString())
    // })

    console.log(req.body)

    res.send({ message: "Data Recieved" })
})



app.listen(7000, () => {
    console.log("Server is running in http://localhost:7000")
})