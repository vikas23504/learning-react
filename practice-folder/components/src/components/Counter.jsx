import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const[count , setcount] = useState(0);
    const increase =()=>{
        setcount(count+1);

    }
    const decrease =()=>{
        setcount(count-1);
    }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}> -</button>
    </div>
  )
}

export default Counter
