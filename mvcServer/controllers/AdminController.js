export function adminLogin(req, res) {
    try {
        //write the logic
        return res.send("Admin Login API")
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}