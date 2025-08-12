import jwt from "jsonwebtoken"

let secretKey = "MY SECRET KEY 123456"

export function generateToken(data, expiresIn = "7d") {
    try {
        return jwt.sign(data, secretKey, { expiresIn })
    } catch (error) {
        throw new Error(error.message)
    }
}
export function verifyToken(token) {
    try {
        return jwt.verify(token, secretKey)
    } catch (error) {
        throw new Error(error.message)
    }
}