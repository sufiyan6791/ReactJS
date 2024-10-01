import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
export default function Crud() {
    const [ item , setitem]=useState([]);
    const [inputvalue,setinputvalue]=useState({
        name:"",
        email:"",
        password:"",
        gender:"",
        Ischecked:"",
    })

    const [Ischecked,setIschecked]=useState(false);


    const handleinput=(e)=>{
      const {name,value}= e.target;
      setinputvalue({...inputvalue,[name]:value});
    }

    const handlesubmit=(e)=>{
      e.preventDefault();
      setitem([...item,inputvalue]);
      console.log(inputvalue);

      setinputvalue({
        name:"",
        email:"",
        password:"",
        gender:"",
    
      });
      console.log(Ischecked);
     
    }


    useEffect (()=>{
      localStorage.setItem("userdata",JSON.stringify(item));
    })
  return (
    <div>
    <form action="" onSubmit={handlesubmit}>
      <input type="text"
      placeholder='enter name'
      value={inputvalue.name}
      name='name'
    onChange={handleinput}
      />
      <br />
      <br />
      <input type="email"
      placeholder='email'
      value={inputvalue.email}
      name='email'
      onChange={handleinput}

      
      />

      <br />
      <br />
      <input type="password"
      placeholder='password'
      value={inputvalue.password}
      onChange={handleinput}
      />
      <br /><br />

      <input type="radio"
      name='gender'
      id='male'
      value="male"
      onChange={handleinput}

      />
      <label htmlFor="male">MALE</label>

      <input type="radio"
      name='gender'
      id='female'
      value="female"
      onChange={handleinput}
      />
      <label htmlFor="female">FEMALE</label>
 <br />
 <br />
 <input type="checkbox"
 id="check"
 name='ischecked'
 checked={Ischecked}
 onChange={(e)=>setIschecked(e.target.checked)}
 />
 <label htmlFor="check">accept terms and conditions</label>

 <br />
 <br />

 <button>add data</button>
 
 
    </form>
  </div>
  )
}
