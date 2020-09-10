import React from 'react';
import { useSelector } from 'react-redux'

function PosList(){
  const num = useSelector(state => state.counter)
  const name = useSelector(state => state.name)

  return (
    <div>
      <h2>Post List</h2>
      Counter : { num } <br />
      Name : { name } <br />

    </div>
  )
}
export default PosList