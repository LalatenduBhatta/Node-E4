import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.end("HELLO WOLRD !!!!")
})
app.get("/about", (req, res) => {
    res.end("THIS IS THE ABOUT PAGE")
})



app.listen(7000, "127.0.0.1", () => {
    console.log("Server is Running in port 7000")
})