'use client'
import React, { use } from 'react'


const Form = ({todos, setTodos, input, setInput}) => {

    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault(e);
        setTodos([...todos, {text: input, completed: false, id: Math.random() * 1000}]);
        // console.log('these are my todos', todos);
        setInput('');
    }
  
    return (
    <form className='flex flex-row justify-center items-center py-20 text-xl'>
        <div className='pr-3 text-xl'>
            <input 
               className='px-3.5 rounded-l-lg'
               value={input} 
               type='text' 
               placeholder='Add a todo'
               onChange={inputHandler} />
            <button 
               className='text-white bg-orange-500 px-3.5 rounded-r-lg' 
               type='click'
               onClick={submitTodoHandler}
            >Add</button>
        </div>
        <div>
            <select className='rounded-lg'>
                <option value='all'>All</option>
                <option value='active'>Active</option>
                <option value='completed'>Completed</option>
            </select>
        </div>
    </form>
  )
}

export default Form