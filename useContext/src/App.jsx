import React, { createContext } from 'react'
import ChildB from './components/ChildB'

const Mycontext = createContext()

const App = () => {
  let para = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, blanditiis!"
  let name = "vikas"
  return (
    <div>
     <Mycontext.Provider value = {{para,name}}   >

    <ChildB/>

     </Mycontext.Provider>
    </div>
  )
}

export default App
export {Mycontext}
