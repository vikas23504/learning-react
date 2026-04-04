import React from 'react'
import UseCounter from './components/UseCounter'

const App = () => {
  const {count , increase , decrease} = UseCounter();
  return (
    <div>
      <h1> {count} </h1>
      <button onClick={ increase} > Add </button>
      <button onClick= {decrease}>Subtract </button>
    </div>
  )
}

export default App
