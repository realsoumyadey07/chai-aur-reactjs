import React from 'react'
import  AddTodos  from './components/AddTodos'
import  Todos  from './components/Todos'

export default function App() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <AddTodos/>
      <Todos/>
    </div>
  )
}
