import React from 'react'
import useToggle from './components/UseToggle';


const App = () => {
  const{show , toggleFunction} =useToggle();
   
 
  return (
    <div>
      <input type={show ? "text" : "password"} />
      <button onClick={toggleFunction}>{show ? "hide password" : "show password"}</button>
    </div>
  )
}

export default App
