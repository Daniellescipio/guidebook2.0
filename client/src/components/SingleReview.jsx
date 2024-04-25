import axios from "axios"
import { getAReview } from "../api"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
function SingleReview() {
  const [review, setReview] = useState("")
  const {reviewId} = useParams()
  useEffect(()=>{
    //write an async function to get a single review from the API using the reviewId
    //save the returned review to state with setReview
  }, [])
    return (
      <>
        <p>This page should display a single review. Because review is only text, this page also has buttons to view reviews by the same reviewer, or reviews on the same product.The links are not functional and will need the corresponding paths!</p>
        <p>Display any info you want about the review</p>
        <p>See other reviews by <Link > review.reviewer</Link></p>
        <p>See other reviews for <Link> review.product</Link></p>
      </>
    )
  }
  
  export default SingleReview
  