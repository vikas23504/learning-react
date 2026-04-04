import React from 'react'
import { useState } from 'react'

const useToggle = () => {
const[show ,setshow] = useState(false);

    const toggleFunction = ()=>{
        setshow(!show);
    }
    



  return {show ,toggleFunction }
}

export default useToggle
