import { useState } from "react";
import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos, clearCompleted } = useTodos();

  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;

    return true;
  });

  const remaining = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="todo-list-container">
      <div className="filter-tabs">
        {["all", "active", "completed"].map((item) => (
          <button
            key={item}
            className={filter === item ? "active-filter" : ""}
            onClick={() => setFilter(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      <div className="todo-list">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-icon">✓</div>
            <p>
              {filter === "all"
                ? "No tasks yet. Add your first task!"
                : `No ${filter} tasks found.`}
            </p>
          </div>
        )}
      </div>

      <div className="todo-footer">
        <span>{remaining} tasks remaining</span>

        <button onClick={clearCompleted}>
          Clear completed
        </button>
      </div>
    </div>
  );
}

export default TodoList;