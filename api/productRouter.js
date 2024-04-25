const express = require('express')
const productRouter = express.Router()
const {getAProduct, getAllProducts, removeAProduct, updateAProduct} = require('../db/storySQL')
const {createProduct} = require('../db/seed')
const { getAReviewer, getAUserWithId } = require('../db/userSQL')



//get all products
//use this url to read your data
//http://localhost:8080/productreviewapi/products
productRouter.get("/", async (req, res, next)=>{
    try{
        res.send(await getAllProducts())
    }catch(error){
        next(error)
    }
})

//get a Product
//use this url to read your data
//http://localhost:8080/productreviewapi/products/{a product id goes here}
productRouter.get("/:id", async (req, res, next)=>{
    try{
        res.send("await a call to the right function")
    }catch(error){
        next(error)
    }
})
//post/add a product
//use this url to add to your data
//http://localhost:8080/productreviewapi/products
productRouter.post("/", async (req, res, next)=>{
    try{
        res.send("await a call to the right function")
    }catch(error){
        next(error)
    }
})

//these are stretch goals because realistically a user will not have the ability to update or delete products, altering/removing a product is only something you as the devloper/admin should be able to do
//patch/update a product
//use this url to update your data
//http://localhost:8080/productreviewapi/products/{a product id goes here}
productRouter.patch("/:product_id", async (req, res, next)=>{
    try{
        const user_id = req.body.userId
        const user = await getAUserWithId(user_id)
        console.log(user)
        if(user.admin){
            const updatedProduct = req.body
            updatedProduct.product_id = req.params.id
            res.send(await updateAProduct(updatedProduct))
        }else{
            res.send("You are not authorized to perform this action.")
        }
    }catch(error){
        next(error)
    }
})
//delete/remove a product
//use this url to delete your data
//http://localhost:8080/productreviewapi/products/{a product id goes here}
productRouter.delete("/:id", async (req, res, next)=>{
    try{
        //call the right function
        res.send("nothing is returned from the database, so write a message letting them know the product was deleted")
    }catch(error){
        next(error)
    }
})

module.exports = productRouter