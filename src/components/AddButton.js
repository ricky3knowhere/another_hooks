import React from 'react';
import { useDispatch } from 'react-redux'

function AddButton(){
  const dispatch = useDispatch()

  function increment(){
    dispatch({type: 'INCREMENT'})
  }
  return (
    <button onClick={increment}>Add</button>
  )
}


export default AddButton