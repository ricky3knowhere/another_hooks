import React from 'react';
import { useDispatch } from 'react-redux'

function DeleteButton(){
  
  const dispatch = useDispatch()

  function handleClick(){
    dispatch({type: 'DECREMENT'})
  }
  return (
    <button onClick={handleClick}>Delete</button>
  )
}

export default DeleteButton