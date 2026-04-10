import React from 'react'
import { useState } from 'react'

const App = () => {
  const[isLoggedIn , setIsLoggedIn] = useState(false);
 

  return (
    <div>
      <p>{isLoggedIn? ("welcome user"): ("")}</p>
      <button  onClick={()=> setIsLoggedIn(!isLoggedIn)}>
       {isLoggedIn ? "logout":"login"}
      </button>
    </div>
  )
}

export default App

