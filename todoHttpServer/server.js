import { createServer } from "http"
import { readFileSync, writeFileSync } from "fs"
const server = createServer((req, res) => {
    const { method, url } = req
    if (method == "GET" && url == "/") {
        let data = readFileSync("./Todo.html", "utf-8")
        res.write(data)
        res.end()
    }
    else if (method == "POST" && url == "/newTask") {
        req.on("data", (data) => {
            let task = data.toString()
            let id = Math.trunc(Math.random() * 100000)

            let allTodo = readFileSync("./todo.json", "utf-8") ?
                JSON.parse(readFileSync("./todo.json", "utf-8")) : []

            allTodo.push({ task, id })

            writeFileSync("./todo.json", JSON.stringify(allTodo))

            res.end(JSON.stringify({ message: "Task Stored in server" }))
        })
    }
})


server.listen(7000, "127.0.0.7", () => {
    console.log("server is running at http://127.0.0.7:7000")
})