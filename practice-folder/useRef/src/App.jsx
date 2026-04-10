import React from 'react'
import { createContext } from 'react'
import ChildA from './components/ChildA';

const Mycontext = createContext();
const App = () => {

  return (
    <div>
      <Mycontext.Provider value={{ name : "vikas" , age : 20}}>
        <ChildA/>
      </Mycontext.Provider>
    </div>
  )
}

export default App
export{Mycontext}
