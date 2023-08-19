import "./styles.css";
import Search from "./components/Search";
import { useState, useSyncExternalStore } from "react";
import TodoList from "./components/TodoList";

export default function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <div className="todo-list">
        <Search todoValue={todoValue} setTodoValue={setTodoValue} todos = {todos} setTodos = {setTodos}/>
      </div>
      <div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
