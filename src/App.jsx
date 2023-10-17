import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList.jsx";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);
  return (
    <>
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header />
          </div>
          <div>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
          </div>
          <div>
            <TodoList
              todos={todos}
              setTodos={setTodos}
              setEditTodo={setEditTodo}
              showCompleted={showCompleted}
              setShowCompleted={setShowCompleted}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
