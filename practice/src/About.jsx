import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function About() {

const navigate = useNavigate();
const location = useLocation();



const homepage=()=>{
  navigate("/Home")
}

const contactpage =()=>
{
  navigate ("/contact")
}
  return (
    <div>
      <h2>Aboutpage</h2>
<p>
  name : {location.state.username}
  <br />
  <br />
  password:{location.state.password}
  </p>
      <button onClick={homepage}>home page</button>
<br /><br />
<button onClick={contactpage}> contact page</button>
    </div>
  )
}
