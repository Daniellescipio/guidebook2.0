import { Link, Route, Routes } from "react-router-dom"
import AllProducts from "./components/AllProducts"
import Homepage from "./components/Homepage"
import SingleProduct from "./components/SingleProduct"
import { useState } from "react"
import SingleReview from "./components/SingleReview"
import Authorization from "./components/Auth"
//dont forget to import everything you need!

function App() {
  //get the user from local storage if it exist, 
  const storeduser = localStorage.getItem("user")
  //save it to state. if it doesn exit, start as a falsey value
  const [user, setUser] = useState(JSON.parse(storeduser)|| false)

  return (
    <>
    <Routes>
      <Route path = "/" element={<Homepage user = {user}/>}/>
      <Route path = "/auth/" element={<Authorization setUser={setUser} user={user}/>}/>
      <Route path = "/reviews/products/*" element={<AllProducts/>}/>
      <Route path = "/reviews/products/:productId" element = {<SingleProduct/>} />
      <Route path = "/reviews/:reviewId" element = {<SingleReview user={user}/>} />
      {/* create route to add new reviews that ggoes to AddReviewPage */}
      {/* create route for reviews by reviewers that displays the allReviewers */}
      {/* create route for single reviewer page that displays the Single reviewer Page */}
    </Routes>

    </>
  )
}

export default App
