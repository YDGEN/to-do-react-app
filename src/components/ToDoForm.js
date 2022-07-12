import React, {useState} from 'react'

function ToDoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
     setInput(e.target.value);
    };

    const handleSubmit = e => {
      e.preventDefault();

    

     setInput('');
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input
         type='text'
         placeholder='add a todo'
         value={input}
         name='text'
         className='todo-input'
         onChange={handleChange}
        >
         </input>
         <button className='todo-button'>Add todo</button>
          
    </form>
   
  )
}

export default ToDoForm