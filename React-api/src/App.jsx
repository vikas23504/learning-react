import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const[users ,setUsers] =useState([])

  useEffect(()=>{
    fetch("https://category-api-p3zg.onrender.com/categories")
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setUsers(data.data);
      
    })
    .catch((err)=>console.log(err))
  },[])
  return (
    <div>
      <h1>user list</h1>

      {users.map((user)=>(
        <div > 
          <h2>{user.name}</h2>
          <p>{user.addres}</p>
        </div>
      ))}
    </div>
  )
}

export default App
