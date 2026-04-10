import React from 'react'
import { useState } from 'react';

const App = () => {
  const[name ,setname] = useState("vikas");
  return (

    <div>
    <input 
     type="text"
     value={name}
     onChange={(e)=> setname(e.target.value)} 
     />
     <h3>{name}</h3>
    </div>
  )
}

export default App
