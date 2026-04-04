import React, { useMemo, useState } from 'react'

const App = () => {
  const[count , setcount] = useState(0)
  const result = useMemo(()=>{
  
    console.log("yaad rhegya");
    return count*100
    
  },[count]);
  return (
    <div>
      <h2>count : {count}</h2>
       <h2>Result :  {result}</h2>

      <button onClick={() => setcount(count+1)}>add</button>
    </div>
  )
}

export default App
