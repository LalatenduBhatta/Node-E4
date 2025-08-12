import express from "express"
import { signup } from "../controller/userController.js";

const userRouter = express.Router()

//user router apis
userRouter.get("/", (req, res) => res.send("user router is working")) //demo

//signup
userRouter.post("/signup", signup)



export default userRouter;
