import { Navigate } from "react-router-dom"
import { addAReview } from "../api"
function AddReview({user, product}) {
    //state up here!
    const handleSubmit = async ()=>{
      const objToSend = {
        user_id : user.id, 
        product_id: product.id,
        review: "The varible in state that is controlling/tracking our form"
      }
        const response = await axios.post('', objToSend)
        //options after you get the API call working/data posted to the database
        //success message --> You added a review!
        //nav() the to the single review page for them to see the review they just made
        //send the new review back from the API and show them what the wrote
    }

    return (
      <>
      {/* {!user && <Navigate to = "/auth"/>} */}
      <p>if there is no user logged in, this page should redirect them to the Login page, comment in the line above to make see that happen</p>
      <p>Build a form to add a review.</p>
      <p> You will need input only for the text of the review. user_id and product_id should be passed in to this components through props or context</p>
      <p>You need to use useState to control the form and track/save the text of the user</p>
      <p>add a button or input type=submit and give it the handleSubmission function after you finish writing it</p>
      </>
    )
  }
  
  export default AddReview
  