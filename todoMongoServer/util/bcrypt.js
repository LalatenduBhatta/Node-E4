import bcrypt from "bcryptjs";

const saltRound = 10

export function generateHash(password) {
    try {
        return bcrypt.hashSync(password, saltRound)
    } catch (error) {
        throw new Error(error.message)
    }
}