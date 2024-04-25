import { useEffect, useState } from "react"


function AllReviewers({id, prodOrreviewer}) {
  const [reviewers, setReviewers] = useState()
  useEffect(()=>{
      //follow the logic in the already completed all products page, just do it for reviewres instead!
  }, [])

    return (
      <>
      <h1>Reviewers</h1>
      <p> A user should see all the reviewers in the database and if they click on, the should be able to see a reviewers details, AND all the reviews by that reviewer.</p>
      </>
    )
  }
  
  export default AllReviewers
  