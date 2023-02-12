'use client'
import { React, useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'



export default function Home() {
   
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([]);


  return (
    <div>
      <h1 className='font-bold text-4xl text-center underline'>My Todos</h1>
      <Form todos={todos} setTodos={setTodos}input={input} setInput={setInput}/>
      <TodoList todos={todos}/>
    </div>
    
  )
}
