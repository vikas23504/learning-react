import React from 'react'
import { useState } from 'react';

const AddDlt = () => {
    const [users,setuser] = useState([
  { id: 1, name: "Vikas" },
  { id: 2, name: "Aman" },
  { id: 3, name: "Rahul" }
]);
const handleclick = (id)=>{
    setuser(users.filter((user)=>user.id !==id));
}
  return (
    <div>
      {
        users.map((user)=>(
            <div key={user.id}>
                {/* <p>{user.id}</p> */}
                <h1>{user.name}</h1>
                <button onClick={handleclick(user.id)}>delete</button>
            </div>
        ))
      }
    </div>
  )
}

export default AddDlt
