import React from 'react'

const TodoItem = ({ todo, onDelete }) => {
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className='btn btn-sm btn-danger' onClick={() => { onDelete(todo) }}>Delete</button>
            {/* here function is passed, function is not called */}
            {/* if function is called then without clicking the button the function is rendered therefore arrow function is written to pass the function*/}
            {/* onDelete(todo) -- if it is written like this then the function is called */}
        </div>
    )
}

export default TodoItem
