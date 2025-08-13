import express from "express"
import { getProfile, login, signup } from "../controller/userController.js";
import { verifyUser } from "../middleware/verifyUser.js";

const userRouter = express.Router()

//user router apis
userRouter.get("/", (req, res) => res.send("user router is working")) //demo

//signup
userRouter.post("/signup", signup)

//login
userRouter.post("/login", login)

//userDetails
userRouter.get("/profile", verifyUser, getProfile)


export default userRouter;
