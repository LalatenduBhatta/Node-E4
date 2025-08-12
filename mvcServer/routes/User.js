import express from "express"
import { userLogin } from "../controllers/UserController.js"

const UserRouter = express.Router()

//api
UserRouter.post("/login", userLogin)



export default UserRouter