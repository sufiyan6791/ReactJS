import React, { useState } from 'react'
import { json, useLocation, useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate()
    const location = useLocation()

    const homebutton =()=>{
        navigate("/")
    }


    // check if location.state exists
      const initialdata = location.state?.Data ||[]
      const [Data,setdata]= useState (initialdata)


    //add states for editing

    const [Editindex,setEditindex]=useState(null)
     const [Editname,setEditname]=useState()
      const [Editemail,setEditemail]=useState()
      const [search,setsearch]=useState("")
      

      //function to delete a user
      const handleDelete = (index)=>{
        const updatedData =Data.filter((_,i)=>i !==index)
        setdata(updatedData)
        localStorage.setItem("Data",JSON.stringify(updatedData))
      }

      // edit
      const handleEdit = (index)=>{
        setEditindex(index);
        setEditname(Data[index].name)
        setEditemail(Data[index].email)
      }

      //update a user

      const handleupdate= (e)=>{
        e.preventDefault()
        const updatedusers= Data.map((user,index)=>
          index === Editindex? {name:Editname, email:Editemail}:user
        )
        setdata(updatedusers)
        localStorage.setItem("Data",JSON.stringify(updatedusers))
        setEditindex(null);
        setEditname("")
        setEditemail("")
      }

      const filteredList = Data.filter(
        (e)=>
          e.name.toLowerCase().includes(search.toLowerCase())||
          e.name.toUpperCase().includes(search.toLocaleUpperCase())
      
      )


    
  return (
    <div>

      
      <h1>about</h1>
      <br />
<br />
<input type="text"
placeholder='search here.....'
onChange={(e)=> setsearch(e.target.value)}
value={search}

/>

<br /><br />
      <table border={1} >
        <thead>
          <tr>
            <th>sr no </th>
            <th> name</th>
            <th> email</th>
            <th> actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredList && Data.length > 0 ?(
            filteredList.map((user,index)=>(
           <tr key={index}>
            <td>{index+1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={()=>handleEdit(index)}>Edit</button>
              <button onClick={()=>handleDelete(index)}>delete</button>
            </td>

           </tr>
            ))
          ):(
            <tr>
          <td colSpan={4}>
              no data available ,please go back to home page  
          </td>
            </tr>
          )

          
          }
        </tbody>
      </table>

      {Editindex !== null &&(
        <div>
          <h2>edit user</h2>

          <form action="" onSubmit={handleupdate}>

<input type="text"
placeholder='enter new name'
value={Editname}
onChange={(e)=> setEditname(e.target.value)}
/>

<br />
<br />

<input type="email"
placeholder='enter new email'
value={Editemail}
onChange={(e)=> setEditemail(e.target.value)}

/>

<br />
<br />
<button type='submit'>update</button>
<button onClick={()=> setEditindex(null)}>cancle</button>
          </form>
        </div>
      )}

      <button onClick={homebutton}>Home</button>
    </div>
  )
}
