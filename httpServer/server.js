import http from "http"
import fs from "fs"

const server = http.createServer((req, res) => {
    const { url, method } = req
    if (method == "GET" && url == "/") {
        let data = fs.readFileSync("./pages/home.html", "utf-8")
        res.write(data)
        res.end()
    }
    else if (method == "GET" && url == "/about") {
        let data = fs.readFileSync("./pages/about.html", "utf-8")
        res.write(data)
        res.end()
    }
    else if (method == "GET" && url == "/home.css") {
        let data = fs.readFileSync("./css/home.css", "utf-8")
        res.write(data)
        res.end()

    }
    else {
        res.end("404 Page Not Found")
    }
})

server.listen(8080, "localhost", () => {
    console.log("Server listening to port 8080")
})