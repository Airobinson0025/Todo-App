'use client'
import React from "react"

const Todo = ({text}) => {
  return (
    <div className="flex justify-center items-center text-xl pt-4">
        <li className="bg-white w-96 rounded-l-lg px-2 list-disc">{text}</li>
        <button className="bg-green-500 text-white px-2">Done</button>
        <button className="bg-red-500 text-white px-2 rounded-r-lg">Delete</button>
    </div>
  )
}

export default Todo