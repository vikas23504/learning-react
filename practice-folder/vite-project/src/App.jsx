import React, { useState } from 'react'

const App = () => {

 

  const[email , setemail] = useState("")
  const[password , setpassword] = useState("")
  const[message , setmessage] =useState("")

  const submit = (e)=>{
e.preventDefault();
 
if(email =="vikas230704@gmail.com" && password == '1234567890'){
  setmessage("you have entered coreect email password");
  
}else{
  setmessage("you have not entered correct email password")
}
 
 
    
  }
  return (
    <div>
      <form onSubmit ={submit}>

    <label >
          <input
          type="email"
          value={email}
          onChange={(e)=>setemail(e.target.value)}
          placeholder='enter your mail'/>
    </label>

    <label >
      <input type="password"
      value = {password}
      onChange={(e)=>setpassword(e.target.value)}
      placeholder='enter your password'/>
    </label>


      <button type="submit">Log in</button>

      <h2>{message}</h2>

      </form>

     
    </div>
  )
}

export default App
