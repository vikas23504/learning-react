import React, { createContext, useState } from 'react'

import ThemeToggle from './components/ThemeToggle';
import Disco from './components/Disco';

const  Data  = createContext();

const App = () => {
const[theme , setTheme] = useState("light");
 
const changetheme = ()=>{
    if(theme == "light"){
      setTheme( "dark")
    }else {
       setTheme( "light")
    }
}
  return (
//   <Data.Provider value ={ {theme , changetheme}}>
//     <div style = {{
//         background : theme ==="light" ? "white": "black",
//         color: theme === "light" ? "black" :"white",
//         height : "100vh"
//     }}>
//      <ThemeToggle/>

//     </div>
  

//   </Data.Provider>

<Disco/>
  )
}

export default App
export{Data}

