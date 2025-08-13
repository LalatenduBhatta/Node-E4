import express from "express"
import { addTask } from "../controller/todoController.js";
import { verifyUser } from "../middleware/verifyUser.js";

const todoRouter = express.Router()

//apis
todoRouter.get("/", (req, res) => res.send({ message: "Its Working" })) //demo

//add task
todoRouter.post("/add", verifyUser, addTask)


export default todoRouter;