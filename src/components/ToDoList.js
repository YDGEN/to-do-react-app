import React, {useState} from 'react'
import ToDoForm from './ToDoForm'

function ToDoList() {
    const [todos, setToDo] = useState([])
    return (
        <div>
          <h1>Plan for Today</h1>
          <ToDoForm />
        </div>
    )
}

export default ToDoList