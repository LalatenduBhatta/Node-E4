import express from "express"
import { addTask, getAllTasks } from "../controller/todoController.js";
import { verifyUser } from "../middleware/verifyUser.js";

const todoRouter = express.Router()

//apis
todoRouter.get("/", (req, res) => res.send({ message: "Its Working" })) //demo

//add task
todoRouter.post("/add", verifyUser, addTask)

//get all Todo(user)
todoRouter.get("/all", verifyUser, getAllTasks)


export default todoRouter;