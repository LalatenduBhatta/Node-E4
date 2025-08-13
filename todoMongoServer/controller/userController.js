import User from "../model/User.js"
import { comparePassword, generateHash } from "../util/bcrypt.js"
import { generateToken, verifyToken } from "../util/jwt.js"

export async function signup(req, res) {
    try {
        let { email, name, password } = req.body
        if (!email || !name || !password) {
            return res.status(400).send({ error: "Provide all the fields" })
        } else {
            let isUser = await User.findOne({ email })
            if (isUser) {
                return res.status(400).send({ error: "Email Already Exists" })
            } else {
                let hashedPassword = generateHash(password)
                let userDetails = new User({ email, name, password: hashedPassword })
                await userDetails.save() //insert to db //update in db
                return res.status(201).send({ message: "User Registration Successful" })
            }
        }
    } catch (error) {
        return res.status(500).send({ error: "Something went Worng", msg: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).send({ error: "Provide all required fileds" })
        } else {
            let isUser = await User.findOne({ email })
            if (!isUser) {
                return res.status(401).send({ error: "User is Not Registered" })
            } else {
                let isPasswordMatched = comparePassword(password, isUser.password)
                if (!isPasswordMatched) {
                    return res.status(401).send({ error: "Incorrect Password" })
                } else {
                    let token = generateToken({ id: isUser._id })
                    res.cookie("token", token)
                    res.status(200).send({ message: "User Login Successful" })
                }
            }
        }
    } catch (error) {
        return res.status(500).send({ error: "Something went Worng", msg: error.message })
    }
}

export const getProfile = async (req, res) => {
    try {
        let { id } = req
        let userDetails = await User.findById(id).select("-password -_id -__v")
        return res.status(200).send({ userDetails })
    } catch (error) {
        return res.status(500).send({ error: "Something went Worng", msg: error.message })
    }
}