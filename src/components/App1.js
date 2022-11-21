// import logo from './logo.svg';
import React, {useState, useRef, useEffect} from 'react';
import './App1.css';
import TodoList from './Components/TodoList';
// import uuidv4 from 'uuid/v4'
// import Textfield from "./Components/Textfield";

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem
    (LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  let uniqueid = todos[todos.length - 1];

  // localStorage.setItem("id", "uniq");
  
  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if(name === '') return
    console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, {id: (() => {
        if(todos === []){
          return 1;
        }
        else{
          return uniqueid.id + 1;
        }
      }), name:name, complete:false}]
    })
    todoNameRef.current.value = null
  }

  return (
    <div className="App">
      {/* <div className="container my-3">
      <Textfield heading='Enter todos' todoList={todos}/>
      </div> */}
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" name="todo" id="id" />
      <button className='btn-dark' onClick={handleAddTodo} >Add Todo</button>
      <button className='btn-dark' onClick={handleClearTodos} >Clear Completed</button>
      <div>{todos.filter(todo => !todo.complete).length } left to do</div>
    </div>
  );
}

export default App;
