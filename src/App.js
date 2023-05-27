import React ,{useReducer} from 'react';
import './App.css';


const reducer=(state,action)=>{
   if(action.type == "INC"){
    return state +2;
   }else if(action.type == "DEC"){
    return state -2;
   }else if(action.type == "MUL"){
    return state *2;
   }
}
export default function Usereducer() {
    
    const [state,dispatch]=useReducer(reducer,0);

  return (
    <>
     <div className='allbtn'>
    <h1>{state}</h1>
   
    <button onClick={()=>dispatch({type:"INC"})}>increment</button>
    <button onClick={()=>dispatch({type:"DEC"})}>decrement</button>
    <button onClick={()=>dispatch({type:"MUL"})}>multiply</button>
    </div>
    </>
  )
}
