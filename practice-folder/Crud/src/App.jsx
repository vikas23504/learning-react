import React from 'react'
import { useState } from 'react'

const App = () => {
  const[name , setname]=useState("")
  const[users , setusers] = useState([]);
  
  const AddUser = ()=>{
    const exist = users.find((user)=> user.name === name  );
    if(exist ){
      alert("you have entered alreaday");
      return;
    }
    setusers([...users , {id : Date.now() , name : name}])
    setname("")
  }
  const dlt = (id)=>{
    setusers(users.filter((user)=> user.id !== id))
  }

  return (
    <div>
      <input 
      type="text"
      value={name}
      onChange={(e)=>setname(e.target.value)}
      />
    <button onClick={AddUser}>Add</button>
      {
        users.map((user )=>( 
         <div key={user.id}>
          <h2>{user.name}</h2>
          <button onClick={() => dlt(user.id)}>dlt</button>
          
         </div>
          
          
        ))
      }
    </div>
  )
}

export default App
