import React, { useEffect } from 'react';
import { useState } from 'react';
import './style.css'

const UseEffect = () => {
//   const initialvalue=7;  
  const [myNum,setMyNum]=useState(0);  
  
  useEffect(()=>{
    document.title=`Chats(${myNum})`
  },[myNum]);//array dependency

  return (
    <>
        <div className='center-div'>
        <p>{myNum}</p>
            <div className='button2' onClick={()=>setMyNum(myNum + 1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
            </div>
        </div> 
    </>
    ) 
}

export default UseEffect;
