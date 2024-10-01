import React, { useState } from 'react'

export default function Form1() {

  //array
    const [item, setitem]= useState(()=>{
        const storeddata = localStorage.getItem("userdata");
        return storeddata? JSON.parse(storeddata):[];
    });

    //object

    const [inputdata,setinputdata]=useState({
      name:"",
      email:"",
      password:"",
      gender:""

})
  return (
    <div>
      <form action="" onSubmit={submitform}>
        <input type="name" placeholder='name' />

        <br />
        <br />

        <input type="email"  placeholder='email'/>

        <br />
        <br />
        <input type="password"  placeholder='password'/>
        <br />
        <br />

        <input type="radio"
        id='male'
        name='gender'
        value="male"
       // onChange={handlechange}
        />
        <label htmlFor="male">male</label>

        <input type="radio"
        id='female'
        name='gender'
        value="female"
       // onChange={handlechange}
        />
        <label htmlFor="female">female</label>


<br />
<br />

        <button >submit</button>
        
    </form>
    </div>
  )
}
