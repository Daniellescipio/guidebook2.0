import { Link } from "react-router-dom"

function Homepage(user) {
    return (
      <>
    <div className="nav">
      <Link to = "/products">All product</Link>
      <Link to = "/">Home</Link>
      {/* Link for reviewers */}
      {/* Link to reviewer account page */}
      {/* Link for login/register */}
      {/* Link for addReview Form */}
    </div>
       <p>This starter code is built for a certain user experience;</p>
       <p>There are more detailed instructions in the read me. notes here will serve as a guide for the flow of user expereince.</p>
       <p>On this page a user will have the option to view reviews by reviewer or product Or login/add their own review.</p>
       <button><Link to= "/reviews/products/">Reviews By Products</Link></button>
       <button><Link to= "/reviews/reviewers/">Reviews By Reviewer</Link></button>
       <button><Link to= "/auth">{user? "Add A Review":"Log in to add a review"}</Link></button>
       <p>Clicking Products should take you to the All Products Page</p>
       <p>Clicking Reviewers should take you to the All Reviewers Page</p>
       <p>Clicking login/add should take you to the login/add Page based on whether the user is logged in.</p>
    </>
    )
  }
  
  export default Homepage
  