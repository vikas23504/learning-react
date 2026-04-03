import React from 'react'
import { useRef } from 'react'

// const App = () => {
//   const inputRef = useRef();
  
//    const handleclick = ()=>{
//     inputRef.current.focus()
//     // inputRef.current = 10;
//     console.log(inputRef.current.focus);
    
//    };

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleclick}>click</button>
//     </div>
//   )
// }

// export default App


const App = ()=>{
  const btnref = useRef();
  const changepara = ()=>{
    btnref.current.innerHTML ="hy i am useref wala para"
  }

return(
  <>
  <p ref={btnref}> </p>
  <button onClick={changepara}>change para</button>
  </>
)
}
export default App