import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
   handleclick = ()=>("/home")
  return (
    <div>
      <h2>this is about page</h2>
      <button onClick={navigate}>home p jao</button>
    </div>
  )
}

export default About
