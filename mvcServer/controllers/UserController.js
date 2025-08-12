export function userLogin(req, res) {
    try {
        //write the logic
        return res.send("User Login API")
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}