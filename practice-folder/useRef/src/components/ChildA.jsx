import React from 'react'
import { useContext } from 'react'
// import { useCallback } from 'react'
import { Mycontext } from '../App'

const ChildA = () => {

    const data = useContext(Mycontext)
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.age}</p>
    </div>
  )
}

export default ChildA
