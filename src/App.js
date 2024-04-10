// import logo from './logo.svg';
import './App.css';
import React  , {useState} from 'react';
import Axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("")

  const getTodo = () =>{
    Axios.get("https://2848-61-95-158-116.ngrok-free.app/todos").then((response)=>{
      console.log(response.data);
      setTodos(response.data)
    })
  }
  const postTodo = () => {
    Axios.post("https://2848-61-95-158-116.ngrok-free.app/todos", {
      title: title,
      checked: false
    }).then((response)=>{
      console.log(response)
    })
  }
  const deleteTodo = (id) => {
    Axios.delete(`https://2848-61-95-158-116.ngrok-free.app/todos/${id}`).then((response)=>{
      console.log(response)
      // alert("todo delete!")
    })
  }


  return (
    <div className="App">
      <div>
        <h1>CRUD APIS</h1>
        <button onClick={getTodo}> Get Todo </button>
        {todos.map((todo, key)=>{
          return (<div key={todo.id}>
            <div>{todo.title}</div>
            <div>{todo.checked === false ? "Not Done" : "Done"}</div>
            <button onClick={()=>{deleteTodo(todo.id)}}> Delete a todo</button>
            </div>
          )
        })}
        <input name="title" placeholder='title' onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
    
        <button onClick={postTodo}> Post Todo </button>
      </div>
    </div>
  );
}

export default App;
