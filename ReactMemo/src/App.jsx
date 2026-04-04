import React from 'react'
import { useState } from 'react'
import Child from './components/Child';

const App = () => {
    const[state , setstate] = useState(0);
    const handleclick = ()=>{
        setstate((prev)=> prev+1)
    }
  return (
    <div>
      <h2>{state}</h2>
      <button onClick={handleclick}>Add</button>
      <Child/>
    </div>
  )
}

export default App
