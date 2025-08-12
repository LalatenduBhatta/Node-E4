import express from "express"
import fs from "fs"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const app = express()
//middleware
app.use(express.json())
//api / routes
app.get("/", (req, res) => res.send("server is working"))

app.post("/signup", (req, res) => {
    let { email, password, gender, address, name } = req.body
    if (!email || !password) {
        return res.status(400).send({ error: "Provide Required Fileds" })
    } else {
        let allUsers = fs.readFileSync("./users.json", "utf-8") ?
            JSON.parse(fs.readFileSync("./users.json", "utf-8")) : []
        let isExists = allUsers.find(e => e.email == email)
        if (isExists) {
            return res.status(400).send({ error: "User already registered" })
        } else {
            let hashPassword = bcrypt.hashSync(password, 10)
            allUsers.push({ email, password: hashPassword, gender, address, name })
            fs.writeFileSync("./users.json", JSON.stringify(allUsers))
            res.status(201).send({ message: "User Registration Successful" })
        }
    }
})

app.post("/login", (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).send({ error: "Provide Required Fileds" })
    } else {
        let allUsers = fs.readFileSync("./users.json", "utf-8") ?
            JSON.parse(fs.readFileSync("./users.json", "utf-8")) : []
        let isUser = allUsers.find(e => e.email == email)
        if (!isUser) {
            return res.status(400).send({ error: "User not registered" })
        } else {
            let isMatched = bcrypt.compareSync(password, isUser.password)
            if (isMatched) {
                let token = jwt.sign({ email: isUser.email }, "MySecretKey")
                res.set("authToken", token) //sending the auth token in res headers
                // res.cookie("authToken", token) //sending as a cookie
                return res.status(200).send({ message: "Login Successful" })
            } else {
                return res.status(401).send({ error: "Password is not matching" })
            }
        }
    }
})

app.put("/edit", (req, res) => {
    try {
        let newData = req.body
        //check the user authtoken(coming in req headers)
        let token = req.headers["authorization"].split(" ")[1]
        //get the email from the token 
        let { email } = jwt.verify(token, "MySecretKey")
        //get the users
        let allUsers = JSON.parse(fs.readFileSync("./users.json", "utf-8"))
        //then allow the user to update its profile using email for matching
        let updatedUsers = allUsers.map((user) => {
            if (user.email == email) {
                //update the user data
                user = { ...user, ...newData }
            }
            return user
        })
        //save the updated user in json file
        fs.writeFileSync("./users.json", JSON.stringify(updatedUsers))
        //send an request back that the user data updation successful
        return res.status(200).send({ message: "User Data Updated" })
    } catch (error) {
        return res.status(500).send({ error: "Server Error", message: error.message })
    }
})

app.listen(7000, () => {
    console.log("Server Running At http://localhost:7000")
})