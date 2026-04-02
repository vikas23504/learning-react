import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const[count , setcount] = useState(0);

  const increase = () =>{
      setcount(count +1);
    }
    const decrease = () =>{
      setcount(count-1);
    }
    const reset = ()=>{
      setcount(0)
    }
  return (
    

    <div>
      <h2>Count : {count}</h2>
      <button onClick={increase}>increase count</button>
      <button onClick={decrease}>Decrease count</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
