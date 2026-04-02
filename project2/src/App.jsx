import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const[usertype ,setuserType] = useState("")
  const[alltask ,setalltask] = useState([])

  const update = ()=>{
    if(usertype === ""){
      alert("you have not enter any task please add task")
    }else{
    setalltask([...alltask , usertype]);
    setuserType ("");
  } }
  
  const deletetask = (index)=>{
    return setalltask(alltask.filter((ele, ind)=>{
     return ind !== index
    }))}
  return (
    <div>
      <h2>To-Do App</h2>
      <input 
      type="text"
      value={usertype}
      placeholder='enter tour task'
      onChange={(e)=>  setuserType(e.target.value)}
      
      />

      <button onClick={update}>Add Task</button>

      <ul>
        {alltask.map((t ,indext)=>{
         return <li key={indext} >
          {t} 
         <button onClick={() => deletetask(indext)}>delete</button>
         </li>
        })}
      </ul>
    </div>
  )
}

export default App
