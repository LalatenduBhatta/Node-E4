import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    userId: { type: mongoose.Schema.ObjectId, required: true },
    completed: { type: Boolean, default: false }
}, { timestamps: true })

const Todo = mongoose.model("todos", todoSchema)


export default Todo;