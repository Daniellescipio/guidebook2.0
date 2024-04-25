import axios from "axios"

async function getAllProducts(){
    const response =await axios('/productreviewapi/products')
    return response.data
}
async function getAllProductsByReviewer(){
    
}
async function getAProduct(){
    
}
async function addAReviewer(){
    
}
async function getAllReviewers(){
    
}
async function getAllReviewersForAProduct(){
    
}

async function getAReviewer(){
    
}
async function getReviewsByProduct(product_id){
    const response =await axios(`/productreviewapi/product_reviews/product/${product_id}`)
    return response.data
}

async function getReviewsByReviewer(){
    
}
async function getAReview(review_id){
    const response = await axios(`/productreviewapi/product_reviews/${review_id}`)
    return response.data
}
async function addAReview(review){
    
}
async function editAReview(){
    
}
async function deleteAReview(){
    
}

//stretch goals

//give a reviewer the ability to change user deltails(email name password) or delete their profile
async function editAReviewer(){
    
}
async function deleteAReviewer(){
    
}
//create an admin page to add/edit and delete products
async function addAproduct(){

}
async function editAProduct(){

}
async function removeAProduct(){

}
export {
    getAProduct,
    getAllProducts,
    editAProduct,
    removeAProduct,
    addAproduct,
    getAReviewer, 
    getAllReviewers, 
    editAReviewer,
    deleteAReviewer,
    addAReviewer,
    getReviewsByProduct, 
    getReviewsByReviewer, 
    getAReview,
    editAReview, 
    deleteAReview,
    addAReview
}