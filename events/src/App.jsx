import React from 'react'
import Update from './components/Update'

const App = () => {
  const handleclick = ()=>{
    alert("like ho gya")
  }

  return (
    <div>
      <button onClick={handleclick}>like</button>
      <button onClick={()=> alert("subscribe")}>subscribe</button>
    </div>
  )
}

export default App
