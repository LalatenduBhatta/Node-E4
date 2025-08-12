import mongoose from "mongoose";

export default async function dbConnect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/TodoServer")
        console.log("db connected")
    } catch (error) {
        console.log("db connection error", error)
    }
}