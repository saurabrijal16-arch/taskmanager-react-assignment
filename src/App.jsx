import { useState } from 'react';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, { ...task, id: crypto.randomUUID() }]);
  }

  return (
    <div className="app">
      <header className="page-header">
        <a className="brand" href="./"><span className="brand-mark" aria-hidden="true">✓</span> Task Manager</a>
        <span className="header-note">A little structure. A clearer day.</span>
      </header>
      <main>
        <div className="intro">
          <p className="eyebrow">MAKE ROOM FOR WHAT MATTERS</p>
          <h1>One task at a time.</h1>
          <p>Get it out of your head and onto your list.</p>
        </div>
        <div className="workspace">
          <TaskForm onAddTask={addTask} />
          <TaskList tasks={tasks} />
        </div>
      </main>
      <footer>Keep it simple. Keep moving forward.</footer>
    </div>
  );
}
