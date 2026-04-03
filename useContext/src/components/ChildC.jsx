import React, { useContext } from 'react'
import {  MyContext } from '../App'   // ✅ import karna zaroori

const ChildC = () => {
  const {value} = useContext(MyContext)     // ✅ yahi se value milegi

  return (
    <div>
      <p>name : {value}</p>
    </div>
  )
}

export default ChildC