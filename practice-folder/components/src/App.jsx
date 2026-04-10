import React from 'react'
import User from "./components/User"

const App = () => {
  return (
    <div>
      <User name = "vikas" age={20} />
       <User name = "ankit" age={25} />
    </div>
  )
}

export default App
