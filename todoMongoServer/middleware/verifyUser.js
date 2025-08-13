import { verifyToken } from "../util/jwt.js"

export const verifyUser = async (req, res, next) => {
    try {
        let { token } = req.cookies
        let { id } = verifyToken(token)
        if (!id) {
            return res.status(401).send({ error: "Invalid Token" })
        } else {
            req.id = id
            next()
        }
    } catch (error) {
        return res.status(500).send({ error: "Something went Worng", msg: error.message })
    }
}