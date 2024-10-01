import { app } from './firestore'
import './App.css'

import { addDoc, collection, getFirestore } from 'firebase/firestore/lite'

const firestore = getFirestore(app)
function App() {
   
  const adddata =()=>{
     addDoc(collection(firestore,"cities"),{
      name:"mumbai",
     })
  }
  const subdata =()=>{
    addDoc(collection(firestore,"cities/5Uz9ic3kaznLaM9jkdf8/places"),{
      sector:"mumbra",
    })
  }

  return (
    <>
      <button onClick={adddata}>Add data</button>

      <button onClick={subdata} > Subdata</button>
    </>
  )
}

export default App
