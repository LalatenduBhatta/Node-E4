import express from "express"
import { getAllProducts } from "../controllers/ProductController.js"

const ProductRouter = express.Router()

//api
ProductRouter.get("/", getAllProducts)


export default ProductRouter