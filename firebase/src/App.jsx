import { useState } from 'react'
import './App.css'
import { app } from './Firebase'
import { set,ref, getDatabase, remove, update } from 'firebase/database'

const db = getDatabase(app)

function App() {

const [input, setinput]=useState({
  name:"",
  age:"",
})
const handleform=(e)=>{
  e.preventDefault()
  
  set(ref(db,`user/${input.name}`),{
    name:input.name,
    age:input.age,
  })
  setinput({
    name:"",
    age:"",
  })
  e.target.reset()
}


  // const storeddata = ()=>{
  //   set(ref(db,"user/dev"),{
  //     id:1,
  //     name:"dev",
  //     age:20,

  //   })
  //   console.log("storeddata");
    
  // }


  // const deletedata = ()=>{
  //   remove(ref(db,"user/dev"))
  // }


  // const updatedata = () => {
  //   update(ref(db, "user/samir"), {
  //     id: 2,
  //     name: "TEST",
  //     age: 40,
  //   })
  //   console.log(updatedata);

  // }
  return (
    <>
      <h2>fire base</h2>
      {/* <button onClick={storeddata}> store data</button>
      <button onClick={deletedata}>deletedata</button>
      <button onClick={updatedata}>updatedata</button> */}

      <form action="" onSubmit={handleform}>
        <br />
        <input type="text"
        placeholder='name'
        value={input.name}
        onChange={(e)=>setinput({...input,name:e.target.value})}
        />

        <br />
        <br />
        <input type="number"
        placeholder='age'
        value={input.age}
        onChange={(e)=>setinput({...input,age:e.target.value})}
        
        />
        <br />
        <br />
        <button>submit</button>
      </form>
    </>
  )
}

export default App
