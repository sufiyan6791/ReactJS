/*import React, { useState } from 'react'

export default function Spreading() {
    const [obj , setobj] =useState({
        name:"raj",
        age:39,
        city:"manali",
    });

    const changevalue=()=>{

        setobj({...obj,name:"hi"})
    }
  return (
    <div>
      <h2>{obj.name}</h2>
      <h2>{obj.age}</h2>
      <h2>{obj.city}</h2>


      <button onClick={changevalue}>change value</button>
    </div>
  )
}
*/

//object in usestate


import React, { useState } from 'react'

export default function Spreading() {

    const [data,setdata]= useState ({
        name:"",
        email:"",
        password:"",

    });


    const handlechange = (e)=>{
        const { name, value } = e.target;
        setdata({
            ...data,
            [name]: value});
    };

    const submitForm=(e)=>{
e.preventDefault();
        console.log(data.name,data.email,data.password);
    }
  return (
    <div>
      <form action=""    onSubmit={submitForm}>
<input type="text" placeholder='name' 
value={data.name}
name='name'
onChange={handlechange}
/>


<br />
<br />
<br />

<input type="email" placeholder='email'
value={data.email}
name='email'
onChange={handlechange}
/>


<br />
<br />
<br />
<input type="text" placeholder='password' 
value={data.password}
name='password'
onChange={handlechange}
/>


<br />
<br />
<br />


<button type='submit'>submit button</button>

      </form>
    </div>
  )
}
