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
    else if (method == "GET" && url == "/allTasks") {
        let allTodo = readFileSync("./todo.json", "utf-8") ?
            JSON.parse(readFileSync("./todo.json", "utf-8")) : []

        res.end(JSON.stringify(allTodo))
    }
    else if (method == "DELETE" && url == "/deleteTask") {
        req.on("data", (data) => {
            let id = data.toString()
            let allTodo = JSON.parse(readFileSync("./todo.json", "utf-8"))

            let updatedTodo = allTodo.filter(ele => ele.id != id)

            writeFileSync("./todo.json", JSON.stringify(updatedTodo))

            res.end(JSON.stringify({ message: "Task Deleted Successfully" }))
        })
    }
    else if (method == "POST" && url == "/getEditTask") {
        let allTodo = JSON.parse(readFileSync("./todo.json", "utf-8"))
        req.on("data", data => {
            let id = data.toString()
            let editTask = allTodo.find((ele) => ele.id == id)
            res.end(JSON.stringify(editTask))
        })

    }
    else if (method == "PUT" && url == "/updateTask") {
        let allTodo = JSON.parse(readFileSync("./todo.json", "utf-8"))
        req.on("data", data => {
            let updateTaskDetails = JSON.parse(data.toString())
            allTodo = allTodo.map(ele => {
                if (ele.id == updateTaskDetails.id) {
                    ele.task = updateTaskDetails.task
                }
                return ele
            })

            writeFileSync("./todo.json", JSON.stringify(allTodo))

            res.end(JSON.stringify({ message: "Task Updated Successfully" }))
        })

    }
})


server.listen(7000, "127.0.0.7", () => {
    console.log("server is running at http://127.0.0.7:7000")
})