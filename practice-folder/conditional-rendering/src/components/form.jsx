import React from 'react'
import { useState } from 'react'

const form = () => {
    const[name , setname] =useState("")
    const [email , setEmail] = useState("")
const handlesubmit =(e)=>{
   e.preventDefault();
}
    
  return (
    <div>
     <form onSubmit={handlesubmit}>
        <label >name
     <input
       type="text" 
       value={name}
        onChange={(e)=>setname(e.target.value)}
        />
     </label>

     <label >name
     <input
       type="email" 
       value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
     </label>

     <button type='submit'>submit</button>
    
     </form>
    <h2>name : {name}</h2>
    <h2>email : {email}</h2>

    </div>
  )
}

export default form
