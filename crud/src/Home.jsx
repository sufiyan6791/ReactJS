import React, { useEffect, useState } from 'react'
import { json, useNavigate } from 'react-router-dom'

export default function Home() {

    const [name, setname]= useState("")
    const [email, setemail]= useState("")
    const [users,setusers]=useState(()=>{
        const storedData =localStorage.getItem("Data");
        return storedData ? JSON.parse(storedData):[]
    })


    const navigate = useNavigate()


    const aboutbutton = ()=>
{
    navigate("/About",{state:{Data:users}})
}

const handleform =(e)=>{
    e.preventDefault()
    setusers([...users,{name:name, email:email}])
    console.log(name,email);
    setname("");
    setemail("")
    
}

useEffect (()=>{
  localStorage.setItem("Data",JSON.stringify(users))
})


  return (
    <div>
      <h1>home</h1>

      <form action="" onSubmit={handleform}>
<input type="text" 
placeholder='enter name'
value={name}
onChange={(e)=> setname(e.target.value)}

/>
<br />
<br />
<input type="email"
placeholder='enter email'
value={email}
onChange={(e)=> setemail(e.target.value)}

/>
<br />
<br />

<button type='submit'>submit</button>



      </form>

      <br />
      <br />



      <button onClick={aboutbutton} disabled={users.length===0}>about</button>
    </div>
  )
}
