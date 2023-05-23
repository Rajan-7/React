import React from 'react';
import { useState } from 'react';
import './style.css'

const UseState = () => {
//   const initialvalue=7;  
  const [myNum,setMyNum]=useState(0);  
  console.log(myNum);
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
            <div className='button2' onClick={()=>myNum > 0 ? setMyNum(myNum - 1):setMyNum(0)}>
            {/* <div className='button2' onClick={()=>setMyNum(myNum - 1)}> */}

                <span></span>
                <span></span>
                <span></span>
                <span></span>
                DCER
            </div>
        </div> 
    </>
    ) 
}

export default UseState
