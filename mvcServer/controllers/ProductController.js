export function getAllProducts(req, res) {
    try {
        res.send("Products API")
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}