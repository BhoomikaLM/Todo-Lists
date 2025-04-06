import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {

    let todoStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className='container' style={todoStyle}>
            <h3 className='my-3'>Todos List</h3>

            {props.todos.length === 0 ? "No todos to display" :
                props.todos.map((todo, i) => {
                    return (
                        < div key={i} >
                            <TodoItem todo={todo} onDelete={props.onDelete} />
                            <hr />
                        </div>
                    )
                })
            }

            {/* {props.todos.map((todo) =>
                <div key={todo.sno}>
                    <li >{todo.title}</li>
                    <li >{todo.desc}</li>
                    <li>
                        <button className='btn btn-sm btn-danger' >Danger</button>
                    </li>
                </div>
            )} */}

        </div >
    )
}

export default Todos
