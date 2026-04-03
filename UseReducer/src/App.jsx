/* use reducer internally kya hota hai chlo delhte hai 
initial state =  useReducer(reducer , 0)
yha jo 0 hai vo hmari initial state hoti hai

dispatch kya hai = ye ek function hota hai iska kaam reducer ko action send karna
ye recucer ko btata hai ki mujhe increment krna hai decrement krna h ya jo bhi krna hai
ye btata hai ya hum yu kheb ste hai ki sirf instruction deta(bhejna) hai

action kya hai = ye jo dispatch instruction bhejta hai uska object bna leta hai or btata hai ki kya kaam krna hai 

reducer = actually yhi vo kaam krta hai or ye action .type check bhi krta hai
*/


import { useReducer } from 'react'

const reducer = (state , action)=>{
  if(action.type ==="inc") return state+1;
  if(action.type ==="dec") return state-1;
  if(action.type ==="reset") return 0;
}


const App = () => {
  const[count , dispatch] = useReducer(reducer , 0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> dispatch({type : "inc"})}>+</button>
      <button onClick={()=> dispatch({type : "dec"})}>-</button>
      <button onClick={()=> dispatch({type : "reset"})}>Reset</button>
    </div>
  )
}

export default App
