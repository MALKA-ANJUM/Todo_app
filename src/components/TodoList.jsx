/* eslint-disable react/prop-types */
const TodoList = ({
  todos,
  setTodos,
  setEditTodo,
  showCompleted,
  setShowCompleted,
}) => {
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const filteredTodos = showCompleted
    ? todos.filter((todo) => todo.completed)
    : todos;

  return (
    <div className="todo-list">
      <div className="btn">
        <button
          className={`btn ${!showCompleted ? "active" : ""}`}
          onClick={() => setShowCompleted(false)}
        >
          Show All
        </button>
        <button
          className={`btn ${showCompleted ? "active" : ""}`}
          onClick={() => setShowCompleted(true)}
        >
          Show Completed
        </button>
      </div>
      {filteredTodos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <p className={`list-id ${todo.completed ? "complete" : ""}`}>{todo.id}</p>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
