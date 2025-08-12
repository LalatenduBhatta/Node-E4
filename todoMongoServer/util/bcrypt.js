import bcrypt from "bcryptjs";

const saltRound = 10

export function generateHash(password) {
    try {
        return bcrypt.hashSync(password, saltRound)
    } catch (error) {
        throw new Error(error.message)
    }
}

export function comparePassword(plainPassword, hashedPassword) {
    try {
        return bcrypt.compareSync(plainPassword, hashedPassword)
    } catch (error) {
        throw new Error(error.message)
    }
}