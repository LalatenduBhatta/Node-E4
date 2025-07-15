import express from "express"

const app = express()

//middlewares // routers

app.get("/", (req, res) => {
    res.send("HELLO WORLD")
})

//application level middleware

// app.get("/about", (req, res, next) => {
//     console.log("middleware 1")
//     next()
// })
// app.get("/about", (req, res, next) => {
//     console.log("middleware 2")
//     next()
// })
// app.get("/about", (req, res) => {
//     console.log("middleware 3")
// })

// app.get("/about", (req, res, next) => {
//     console.log("middleware 1")
//     next()
// }, (req, res, next) => {
//     console.log("middleware 2")
// })


// // Routing Level Middleware

// const userRouter = express.Router()
// const productRouter = express.Router()

// // declaring the routing middlewares

// app.use("/user", userRouter)
// app.use("/product", productRouter)

// //using the router specific apis (or) routings

// userRouter.get("/new", (req, res, next) => {
//     res.send("This is the new user api")
// })
// productRouter.get("/new", (req, res, next) => {
//     res.send("This is the new Product api")
// })

// userRouter.get("/add/newuser", (req, res) => {
//     res.send("ADD NEW USER API")
// })


////Built in middlewares
// app.use(express.json()) //parse json body data

// app.use(express.urlencoded({ extended: true })) //parse url data

// app.use(express.static("folder path")) //server static files

//third-party middlewares
// cookie-parser
// cors
// morgan
// multer

//error handling middleware

app.get("/check", (req, res, next) => {
    // console.log(a)
    res.send("THIS IS THE CHECK API")
})
app.get("/check1", (req, res, next) => {
    // console.log(num)
    res.send("THIS IS THE CHECK1 API")
})

app.use((err, req, res, next) => {
    res.send(err.message)
})


app.listen(2000, "localhost", () => {
    console.log("app is running in http://localhost:2000")
})