import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Home() {

  const [name, setname]= useState("");
  const [password, setpassword]= useState("");
  const navigate = useNavigate()

 

  const aboutpage = ()=>{
    navigate ("/about",{
      state : { username: name, password:password},
 })
  }

const contactpage =()=>{  
  navigate("/contact");

}

const formsubmit=(e)=>{
  e.preventDefault();
  console.log(name);
  e.target.reset()
}


  return (
    <div>
      <h1> Home page</h1>

      <form action="" onSubmit={formsubmit}>
<input type="text"
placeholder='name'
onChange={(e)=> setname(e.target.value)}
/>

<br />
<br />


<input type="password"
placeholder='password'
onChange={(e)=>setpassword(e.target.value)}
/>

<br />
<br />

<button type='submit'>submit</button>

      </form>
      <br />
      <br />  

      <button onClick={aboutpage}> go to aboutpage</button>
      <br />
      <br />
      <button onClick={contactpage}> go to contactpage</button>
    </div>
  )
}

