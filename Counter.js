import React from 'react'
import { increment,decrement } from './counterSlice'
import {useDispatch} from react-redux


const Counter =()=>{
  const dispatch =useDispatch(); 
  const count =useSelector (state=>state.counter);


  return (
    <div>
      <button onClick={()=>dispatch(increment())}>INCREMENT</button>
      <span>{count}</span>
      <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
    </div>
  )
}

export default Counter;
