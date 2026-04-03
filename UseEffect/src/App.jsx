import React, { useEffect, useState } from 'react'

const App = () => {
  const[count , setcount] = useState(0);
 useEffect(() => {
  if (count < 2) {
    const timer = setInterval(() => {
      console.log("timer chla");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }
}, [count]);
   const add = ()=>{
    setcount(prev => prev+1)
   }
  return (
    <div>
      <h2>count : {count}</h2>
      <button onClick={add}>add</button>
    </div>
  )
}

export default App

