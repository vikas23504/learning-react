import React from 'react'
import { useState } from 'react'

const LoginForm = () => {
    const[email , setEmail] = useState("");
    const[password , setpassword] = useState("");

    const handlesubmit = (e)=>{
        e.preventDefault();

        console.log("Email :" , email );
        console.log("password",password);
        
        
    };
  return (
    <div>
        <form onSubmit={handlesubmit}>
      <input 
      type="email" 
      value = {email}
      onChange={(e)=>setEmail(e.target.value)}
      placeholder='Enter your Gmail..'
      />
      
    <input 
    type="password"
    value={password}
    onChange={(e)=>setpassword(e.target.value)}
    placeholder='Enter your password ...'
     />

    <button type='submit'>submit</button>
    
    </form>

    </div>
  )
}

export default LoginForm
