import { useState } from 'react'

import './App.css'
import Form1 from './component/Form1'
import Quiz from './component/Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Quiz/>
    </>
  )
}

export default App
