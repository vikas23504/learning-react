// import React from 'react'

// const App = () => {
//   const user = ["aman", "nitin","ajay"]
 
//   return (
//     <div>
//       <ul>
//      {user.map((use,index)  => (
      
//          <li key={index}>{use}</li>
          
//      ))}
//      </ul>
//     </div>
//   )
// }

// export default App

import React from 'react'

const App = () => {
  const users = [
  { name: "Vikas", age: 20 },
  { name: "Rahul", age: 22 },
  { name: "Aman", age: 25 }
];
  return (
    <div>
      {
        users.map((user , index)=>(
          <div key={index} 
  style={{
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px",
    width: "200px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  }}>

            <h2 >name : {user.name}</h2>
            <h3>age : {user.age}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default App

// import React, { useState } from "react";

// const App = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: "Vikas", age: 20 },
//     { id: 2, name: "Rahul", age: 22 },
//     { id: 3, name: "Aman", age: 25 }
//   ]);

//   const deleteUser = (id) => {
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   return (
//     <div>
//       {users.map((user) => (
//         <div key={user.id}>
//           <h2>name: {user.name}</h2>
//           <h3>age: {user.age}</h3>

//           <button onClick={() => deleteUser(user.id)}>
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;
