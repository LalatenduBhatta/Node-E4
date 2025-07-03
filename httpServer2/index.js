import http from "http"
import fs from "fs"

const server = http.createServer((req, res) => {
    const { method, url } = req
    // console.log(method, url)
    if (method == "GET" && url == "/") {
        let data = fs.readFileSync("./pages/Home.html")
        res.end(data)
    }
    else if (method == "GET" && url == "/about") {
        let data = fs.readFileSync("./pages/About.html")
        res.end(data)
    }
    else if (method == "GET" && url == "/login") {
        let data = fs.readFileSync("./pages/Login.html")
        res.end(data)
    }
    else if (method == "GET" && url == "/global.css") {
        let data = fs.readFileSync("./css/global.css")
        res.end(data)
    }
    else if (method == "GET" && url == "/images/wallpaper.avif") {
        let data = fs.readFileSync("./images/wallpaper.avif")
        res.end(data)
    }
    else if (method == "GET" && url == "/student") {
        let studentDetails = { name: "Rahul", age: 25, address: "Delhi" }
        res.end(JSON.stringify(studentDetails))
    }
    else if (method == "POST" && url == "/postStudent") {
        req.on("data", (data) => {
            let student = JSON.parse(data)

            //check the json file
            let allStudents = fs.readFileSync("./students.json", "utf-8")
                ? JSON.parse(fs.readFileSync("./students.json", "utf-8"))
                : []

            let isEmail = allStudents.find(ele => ele.sEmail == student.sEmail)
            if (isEmail) {
                res.end(JSON.stringify({ error: "Email Already Existed" }))
            } else {
                allStudents.push(student)
                fs.writeFileSync("./students.json", JSON.stringify(allStudents))
                res.end(JSON.stringify({ message: "Data Recieved" }))
            }
        })
    }
})


server.listen(4000, () => {
    console.log("Server is Running at http://localhost:4000")
})