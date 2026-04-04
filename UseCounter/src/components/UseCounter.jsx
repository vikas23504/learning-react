import React from 'react'
import { useState } from 'react'

const UseCounter = () => {
    const [count , setcount] = useState(0)
     const increase = () => setcount(count +1);
     const decrease = () => setcount(count - 1);

     
  return{ count, increase , decrease};
};

export default UseCounter
