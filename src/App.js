/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import './App.css';
import Todos from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import Header from './MyComponents/Header';
import AddTodo from './MyComponents/AddTodo';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './MyComponents/About';
import TodoItem from './MyComponents/TodoItem';

{/*import for default export -- for header and todos*/ };

function App() {

    // {
    //     sno: 1,
    //     title: "Go to the market",
    //     desc: "you need to go to market to get the things done"
    // },
    // {
    //     sno: 2,
    //     title: "Go to the mall",
    //     desc: "you need to go to mall to get the things done"
    // },
    // {
    //     sno: 3,
    //     title: "Go to the ghat",
    //     desc: "you need to go to ghat to get the things done"
    // }


    let initTodo;
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    } else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }

    //setTodos will update the function
    const [todos, setTodos] = useState(initTodo);

    const onDelete = (todo) => {
        console.log("on delete called", todo);
        // let index = todos.indexOf(todo);
        // todos.splice(index,1);

        // todos.splice(i, 1);      // if this is done in react dom will not be updated so usestate must be used from react

        // deleting using setTodos
        setTodos(todos.filter((e) => {
            return e !== todo;
        }));

        localStorage.setItem("todos", JSON.stringify(todos));
    }

    const addTodo = (title, desc) => {
        console.log("I am adding this todo", title, desc);
        let sno;
        if (todos.length === 0) {
            sno = 1;
        } else {
            sno = todos[todos.length - 1].sno + 1;
        }
        const myTodo = {
            sno: sno,
            title: title,
            desc: desc
        }
        setTodos([...todos, myTodo]);
        console.log(myTodo);
    }

    //useEffect - runs the below satement as soon as the todo changes --> works like onChanges
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return (
        // <Header /> -->   can also be used like this
        <>
            <Router>
                <Header title="My Todos List"></Header>
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <AddTodo addTodo={addTodo}></AddTodo>
                            <Todos todos={todos} onDelete={onDelete}></Todos>
                        </>
                    } />
                    <Route exact path='/home' element={<AddTodo addTodo={addTodo}></AddTodo>} />
                    <Route exact path='/about' element={<About></About>} />
                </Routes>
                <Footer></Footer>
            </Router>
        </>
    );
}

export default App; 
