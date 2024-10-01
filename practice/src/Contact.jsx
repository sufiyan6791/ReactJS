import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigate = useNavigate();

const homepage = ()=>
{
  navigate("/home")
}

const aboutpage =()=>
{
  navigate("/about")
}
  return (
    <div>
      <h1>contact</h1>
    <button onClick={homepage}> go to home page </button>
    <br /><br />
<button onClick={aboutpage}>  go to about page</button>


    </div>
  )
}

export default Contact
