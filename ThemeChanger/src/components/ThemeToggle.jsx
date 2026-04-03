import React, { useContext } from 'react'
import {Data} from "../App"

const ThemeToggle = () => {
    const {theme , changetheme} = useContext(Data);
  return (
    <div style={
        {
            display : "flex",
            alignItems :"center",
            justifyContent: "end",
            flexDirection : "column",
            height : "100vh"
        }
    }>
      <button 
      onClick={changetheme}
      style={{
        padding : "5px",
        fontSize : "20px",
        borderRadius : "10px"

      }} 
      
      >change theme </button>
      <h2>current theme : {theme}</h2>
    </div>
  )
}

export default ThemeToggle
