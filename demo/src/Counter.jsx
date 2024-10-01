import React, { useState } from 'react'

export default function Counter() {
    const [num,setNum]=useState(0)
    const increment=()=>{
setNum(num+1)
    }
    const decrement=()=>{
        setNum(num-1)
    }
  return (
    <>
      <h1>counter</h1>
      <h3>{num}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  )
}
