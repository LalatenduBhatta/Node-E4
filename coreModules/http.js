// import http from "http"
const http = require("http")

const server = http.createServer((req, res) => {
    //req and res logic
    let { method, url } = req
    if (method == "GET" && url == "/") {
        res.write("<h1>HELLO WORLD</h1>")
        res.write(" WELCOME TO NODE JS")
        res.end()
    } else if (method == "GET" && url == "/about") {
        res.end("THIS IS ABOUT PAGE")
    } else if (method == "GET" && url == "/login") {
        res.end("LOGIN HERE")
    }
})


server.listen(8000, "localhost", () => {
    console.log("server is running")
})
