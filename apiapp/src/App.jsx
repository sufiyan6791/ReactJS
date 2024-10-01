import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
function App() {

  const [input, setInput] = useState([]);


 useEffect(()=>{
 // fetch('https://jsonplaceholder.typicode.com/posts')
  //.then((res)=>res.json())
 // .then((data)=>{
   // console.log(data);
    //setInput(data)
  //})
  //.catch((err)=>console.log(err))

  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((item) => {   
    setInput(item.data);
  })
  .catch((err) => {
    console.log(err); 
  });
}, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>sr no</th>
            <th>title</th>
            <th>body</th>
          
          </tr>
        </thead>
        <tbody>
          {input.map((e,i)=>(
            <tr key={i}>
              <td>{e.id}</td>
              <td>{e.title}</td>
              <td>{e.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
