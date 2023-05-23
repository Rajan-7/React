import React, { useReducer } from 'react';
// import { useState } from 'react';
import './style.css'

const reducer=(state,action)=>{
    if(action.type === 'INCR'){
        state = state + 1;
    }
    if(state > 0 && action.type === 'DCER'){
      
            state = state -1;
       
    }
    return state;
}

const UseReducer = () => {
     const initial=7;
     const [state,dispatch]=useReducer(reducer,initial);
  return (
    <>
        <div className='center-div'>
        <p>{state}</p>
            <div className='button2' onClick={()=>dispatch({ type:'INCR' })}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
            </div>
           <div className='button2' onClick={()=>dispatch({ type:'DCER' })}>
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

export default UseReducer;
