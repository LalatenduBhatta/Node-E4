import User from "../model/User.js"
import { generateHash } from "../util/bcrypt.js"

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