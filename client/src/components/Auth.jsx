import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

function Authorization({setUser, user}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    //we want the error displayed in the page because all of our erros of authorization (this username is taken) are meant to be seen by the front end user in the browser.
    const [error, setError] = useState()
    const [loginOrRegister, setLoginOrRegister] = useState("register")

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            //create a user with values from state if the are registering, we need all their info, if they are loggin in we only need the username and password
            const user = loginOrRegister === "register" ?  {firstname, lastname, email, password}:{email, password}
            //send that user to the API
            const response = await axios.post(`/productreviewapi/auth/${loginOrRegister}`, user)
            //save the successful API response, which should be a user with a .token property to local storage
            localStorage.setItem("user", JSON.stringify(response.data))
            //save it to state too!
            setUser(response.data)
            //what should happen after a user logs in? Will you take them to another page or display a message letting them know they successfully logged in/registered.
        } catch (error) {
            //so we can see the error on the page!
            console.log(error.response.data)
        }
    }

  return (
    <>
    {error &&
    <p className="warningMssg" >{error}</p>}
    <form onSubmit={(e)=>handleSubmit(e)}>
        {   loginOrRegister === "register" &&
            <>
                <label> First Name :
                <input
                value = {firstname}
                onChange={(e)=>setfirstname(e.target.value)}
                />
                </label>

                <label> Last Name :
                <input
                value = {lastname}
                onChange={(e)=>setlastname(e.target.value)}
                />
                </label>
            </>
        }
        <label> Email :
        <input
        value = {email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        </label>


        <label> Password : 
        <input
        value = {password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        </label>

        <button>{loginOrRegister}</button>
        <button type ="button" onClick={()=>setLoginOrRegister(prevVal=>prevVal==="register"? "login":"register")}>{loginOrRegister === "register" ? "Already have an account? Click here to Login!":"New here? Click here to Register!" }</button>
    </form>
    </>
  )
}

export default Authorization