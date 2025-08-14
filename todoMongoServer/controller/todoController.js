import Todo from "../model/Todo.js"

export const addTask = async (req, res) => {
    try {
        let { id } = req
        let { task, completed } = req.body
        if (!task) {
            return res.status(400).send({ error: "Task is missing in request body" })
        } else {
            let todo = new Todo({ userId: id, task, completed })
            await todo.save()
            return res.status(201).send({ message: "Todo Added" })
        }
    } catch (error) {
        return res.status(500).send({ error: "Something Went Wrong", message: error.message })
    }
}

export const getAllTasks = async (req, res) => {
    try {
        let { id } = req
        let allTasks = await Todo.find({ userId: id }).select("-userId -__v")
        res.status(200).send(allTasks)
    } catch (error) {
        return res.status(500).send({ error: "Something Went Wrong", message: error.message })
    }
}

