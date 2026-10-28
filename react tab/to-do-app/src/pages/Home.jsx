import Navbar from "../components/Navbar";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useTodos } from "../context/TodoContext";

function Home() {
  const { todos } = useTodos();

  const completed = todos.filter((todo) => todo.completed).length;

  return (
    <>
      <Navbar />

      <main className="home-container">
        <div className="welcome-section">
          <p className="eyebrow">YOUR PERSONAL WORKSPACE</p>

          <h1>
            Get things done.
            <br />
            <span>One task at a time.</span>
          </h1>

          <p className="subtitle">
            Organize your day, focus on what matters, and make
            progress every single day.
          </p>
        </div>

        <div className="stats">
          <div className="stat-card">
            <span>Total Tasks</span>
            <h2>{todos.length}</h2>
          </div>

          <div className="stat-card">
            <span>Completed</span>
            <h2>{completed}</h2>
          </div>

          <div className="stat-card">
            <span>Remaining</span>
            <h2>{todos.length - completed}</h2>
          </div>
        </div>

        <section className="todo-card">
          <div className="card-heading">
            <div>
              <h2>My Tasks</h2>
              <p>Keep track of everything you need to do.</p>
            </div>

            <span className="task-badge">
              {todos.length} tasks
            </span>
          </div>

          <TodoForm />
          <TodoList />
        </section>
      </main>
    </>
  );
}

export default Home;