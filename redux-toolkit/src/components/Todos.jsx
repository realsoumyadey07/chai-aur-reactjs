import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Todos = () => {
  const todos = useSelector(state=> state.todos);
  return (
    <>
    <h3>Todos</h3>
    <ul>
      {
        todos.map((i)=><li key={i.id}>{i.text}</li>)
      }
    </ul>
    </>
    
  )
}

export default Todos