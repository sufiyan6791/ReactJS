import { useState } from 'react'
import './App.css'
import Usestate from './assets/component/Usestate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Usestate/>
    </>
  )
}

export default App
