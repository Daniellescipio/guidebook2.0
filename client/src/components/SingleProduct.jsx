import { useEffect, useState } from "react"
import { getReviewsByProduct, getAProduct } from "../api"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
function SingleProduct() {
  const [product, setProduct] = useState()
  const {productId} = useParams()
  const nav = useNavigate()
  useEffect(()=>{
    const getReviewData =async ()=>{
      setProduct(await getReviewsByProduct(productId))
    }
    getReviewData()
  },[])
    return (
      <>{
        product &&
        <>
        <p>This page should display one product and all the associated reviews. Clicking on a reviw should lead a user to a single review page.</p>
       <p>display the nameof the product</p>
       <p>display the description too if you want!</p>
       <ul>Map over all the product.reviews</ul>
        {product.reviews.map(review=>
          <li>Create an li or p or div for every review and display whatever information you want in the browser</li>
        )}
        </>
        }
      </>
    )
  }
  
  export default SingleProduct
  