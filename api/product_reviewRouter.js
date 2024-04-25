const express = require('express')
const product_reviewRouter = express.Router()
const {getAProduct_review, getAllProduct_reviews,getAllProductProduct_reviews, getAllReviewerProduct_reviews, removeAProduct_review, updateAProduct_review} = require('../db/characterSQl')
const {createProduct_review} = require('../db/seed')
const{getAUserWithId} = require('../db/userSQL')
const{getAProduct} = require('../db/storySQL')

//getAllReviews

//get all reviews for a product
//use this url to read your data
//http://localhost:8080/productreviewapi/product_reviews/product/{a product id goes here!}
product_reviewRouter.get("/product/:product_id", async (req, res, next)=>{
    try{
        //the front end wil send us a product_id in the url parameters
        const product_id = req.params.product_id
        //we will use that product id in a SQL function that gets all reviews for that product
        const productReviews = await getAllProductProduct_reviews(product_id)
        //we will also map over the array of reviews and find the reviewer for each one
        const reviewers = await Promise.all(productReviews.map(review=>getAUserWithId(review.user_id)))
        //to make life easier on the front end, we retrieve the product details to send as well
        const product = await getAProduct(product_id)
        //the detailed reviews maps over each review and creates a new object with only the review text and reviewer name
        const detailedReviews = productReviews.map((review,i)=>{return{id: review.id, review:review.review, reviewer:reviewers[i].firstname + " "+ reviewers[i].lastname}})
        //the final object that is sent to the front end has the product name and an array of reviews(text and reviewername)
       res.send({product:product, reviews:detailedReviews, reviewers:detailedReviews.map(review=>review.reviewer)})
    }catch(error){
        next(error)
    }
})
//get all reviews by a user
//use this url to read your data
//http://localhost:8080/productreviewapi/product_reviews/reviewers/{a reviewer id goes here!}
product_reviewRouter.get("/reviewers/:reviewer_id", async (req, res, next)=>{
    try{
        const reviewer_id = req.params.reviewer_id
        res.send("await the function that will get all the reviews from a product. send it the reviewer_id")
    }catch(error){
        next(error)
    }
})

//add a review
//use this url to add to your data
//http://localhost:8080/productreviewapi/product_reviews
product_reviewRouter.post("/", async (req, res, next)=>{
    try{
        //the front end will send this information in the body of our req.body
        //remeber you are the front end user as well, so be sire to send this in you feth request body!
        const user_id = req.body.user_id
        const product_id = req.body.product_id
        const review = req.body.review
        if(user_id){
            res.send("if our user is logged in, await a call to the right function, send it the user_id, product_id and review<--in that order!!")
        }else{
            res.send("If not, send them a message telling them to log in first!")
        }
    }catch(error){
        next(error)
    }
})

//patch/update a review
//use this url to update your data
//http://localhost:8080/productreviewapi/product_reviews/{a product_review id goes here}
product_reviewRouter.patch("/:id", async (req, res, next)=>{
    try{
        //the front end will send this information in the body of our req.body
        //remeber you are the front end user as well, so be sire to send this in you feth request body!
        const user_id = req.body.user_id
        const review_id = req.body.product_id
        const review_edits = req.body.review
        //if a user is logged in...
        if(user_id){
            //get the review they want...
            const review = getAProduct_review(review_id)
            if(review.user_id===user_id){
                res.send("if our user is logged in and they are the person who wrote the review, call the function to update their review. Send it the review Id and edits.")
            }else{
                res.send("Otherwise, let the front end know they can't update someone elses review!")
            }
        }else{
            res.send("Send a message telling them to log in to edit reviews!")
        }
    }catch(error){
        next(error)
    }
})

//delete/remove a product
//use this url to delete your data
//http://localhost:8080/productreviewapi/product_reviews
product_reviewRouter.delete("/", async (req, res, next)=>{
    try{
        //the front end will send this information in the body of our req.body
        //remeber you are the front end user as well, so be sire to send this in you feth request body!
        const user_id = req.body.user_id
        const review_id = req.body.product_id
        
        //if a user is logged in...
        if(user_id){
            //get the review they want...
            const review = getAProduct_review(review_id)
            if(review.user_id===user_id){
                res.send("if our user is logged in and they are the person who wrote the review, call the function to update their review. Send it the review Id and edits.")
            }else{
                res.send("Otherwise, let the front end know they can't delete someone elses review!")
            }
        }else{
            res.send("You must be logged in to delete reviews.")
        }
    }catch(error){
        next(error)
    }
})

module.exports = product_reviewRouter