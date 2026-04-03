import { useContext } from "react"

import { Mycontext } from "../App"


const ChildB = () => {

const {para , name}= useContext(Mycontext);


  return (
    <div>
    <h2>hey {name} </h2>
    <p>your value is : {para}</p>
    </div>
  )
}

export default ChildB
