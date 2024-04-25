import { Link, Route, Routes, useSearchParams } from "react-router-dom"
import { getAllProducts, getReviewsByProduct } from "../api"
import { useEffect, useState } from "react"
import SingleProduct from "./SingleProduct"
function AllProducts() {
    //state to be set after API call
    const [products, setProducts] = useState([])
    //useEffect to start State
    useEffect(()=>{
      //async function needed inside useEffect
        const getProductsData = async ()=>{
          //save it to the database
          setProducts( await getAllProducts())
        } 
        //call the async function
        getProductsData()
    },[])
    return (
      <>
        <h1>Products</h1>
        <p> A user should be able to click a product and navigate to /reviews/products/product.id. You can do this with an eventListener and the Navigate component/ useNavigate hook/ Link component/</p>
        {/* map over the array in state and decide how and what you want to put on the page! */}
        {products.map(product=>{
          return(
            <div key = {product.id}>
              <p>{product.name}</p>
              <img src= {product.imgurl} alt = {product.description}/>
              <button><Link to = {`/reviews/products/${product.id}`}>View product Reviews</Link></button>
            </div>
          )
        })}
      </>
    )
  }
  
  export default AllProducts
  