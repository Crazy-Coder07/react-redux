import React from 'react'
import './App.css'
import { useSelector, useDispatch } from "react-redux"
import changeTheNumber from './reducers/updown';
import { incNumber, decNumber } from "./actions/index"


const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className='container'>
        <h1>Increment/Decrement counter</h1>
        <h4>Using React-Redux</h4>
        <div className='quantity'>
          <div onClick={() => dispatch(decNumber())}>-</div>
          <input name="quantity" type="text" value={myState} />
          <div onClick={() => dispatch(incNumber(5))}>+</div>
        </div>
      </div>
    </>
  )
}

export default App