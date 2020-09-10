import React from 'react';
import { useDispatch } from 'react-redux'

function NewInput(){
  const dispatch = useDispatch()
  function handleChange(evt){
    dispatch({ type: 'SET_NAME', name: evt.target.value})
  }
  return(
    <form>
      <input onChange={handleChange} />
    </form>
  )
}

export default NewInput