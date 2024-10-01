import React, { useState } from 'react'

export default function Form() {

    const [name,setName]= useState("");
    const [email,setemail]= useState("");
    const [password,setpassword]= useState("");
    const [ check,setchecked]=useState(false);
    const [ gender,setgender]= useState("");


    const submitForm = (e) => {
        e.preventDefault();
        console.log(name,email,password,check,gender);
        e.target.reset();
    };
  return (
    <div>
      <h1> Form use state</h1>
      <form action="" onSubmit={submitForm}>
        <input type="text"
        placeholder='name'
        onChange={(e)=> setName(e.target.value)}
         />

         <br />
         <br />

         <input type="text"
         placeholder='email'
        onChange={(e)=> setemail(e.target.value)}
          />

          <br />
          <br />

          <input type="checkbox"
          value={check}
          onChange={(e)=> setchecked(e.target.checked)}
          id='check' />
          <label htmlFor="check">terms and conditions</label>

          <br />
          <br />

          <input type="radio"
          id='male'
          value="male"
          name='gender'
          checked= {gender === "male"}
          onChange={(e)=> setgender(e.target.value)}
/>
         <label htmlFor="male">male</label>

        <input type="radio" 
        id='female'
        name='gender'
        value="female"
        checked={gender ==="female"}
        onChange={(e)=> setgender(e.target.value)}
        
        
        
        />
<label htmlFor="female">female</label>

<br />
<br />

          <button>submit</button>
      </form>
    </div>
  )
}
