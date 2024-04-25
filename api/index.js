const express = require('express')
const myAPIRouter = express.Router()
myAPIRouter.get('/', (req, res) => {
    res.send('Hello from API')
})
myAPIRouter.use("/auth", require('./auth'))
// myAPIRouter.use("/products", require('./productRouter'))
//  myAPIRouter.use("/users", require('./userRouter.js'))
// myAPIRouter.use("/product_reviews", require('./product_reviewRouter'))

module.exports = myAPIRouter
