import { useEffect } from "react"
import  {getAReviewer} from "../api"
import { useParams } from "react-router-dom"
function ReviewerPage({visitor}) {
    const {id} = useParams()
    const [user, setUser] = useState({})
    useEffect(()=>{
        const getReviewerData = async()=>{
            const user = await getAReviewer(id)
            const reviews = await getReviewsByReviewer(id)
            setUser({user, reviews})
        }
        getReviewerData()
    }, [])
    return (
      <>
        <p>This page should display one reviewer and all the products they have reviewed. Clicking on a reviw should lead a user to a single review page.</p>
      <h1>A uniques message to welcome the user is visitor.id === user.id(in other words the person visitong the page has the same id as the pageOwner)</h1>
      {/* map over al the users reviews to display them on the page. */}
      {user.reviews.map(review=>
      <>
      <h2>What data about a review do you want to return here?</h2>
      </>)}
      {
    //If the visitor.id === owner.id then we will give them the options to edit or delete themselves. These are stretch goals. 
      user.id === visitor.id &&
        <div>
            <p>You probably won't show the email unless the user is visiting their own account</p>
            <button>Edit creditials stretchGoal</button>
            <button>Delete Profile stretchGoal</button>
        </div>
    }
  
      </>
    )
  }
  
  export default ReviewerPage
  