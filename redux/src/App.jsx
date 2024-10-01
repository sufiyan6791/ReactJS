import {add,dec} from "./action";
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Gallery from "./Gallery";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state)=>state)


  

  return (
    <>
      <h1>counter</h1>
      <h2>counter : {counter}</h2>

<button onClick={()=>dispatch(add(50))}>inc</button>
  <button onClick={()=>dispatch(dec(100))}>dec</button>
  

  <Gallery/>
    </>
  )
}

export default App
