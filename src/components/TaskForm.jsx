import { useState } from 'react';

export default function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (!taskName.trim() || !dueDate || !priority) return;

    onAddTask({ name: taskName.trim(), dueDate, priority });
    setTaskName('');
    setDueDate('');
    setPriority('');
  }

  return (
    <section className="form-panel" aria-labelledby="form-title">
      <span className="section-number">01 / PLAN</span>
      <h2 id="form-title">Add a task</h2>
      <p className="section-description">What's next on your list?</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-name">Task name</label>
        <input id="task-name" type="text" placeholder="e.g. Finish the React assignment" value={taskName} onChange={(event) => setTaskName(event.target.value)} required maxLength={120} pattern=".*\S.*" title="Enter a task name, not just spaces." />

        <label htmlFor="due-date">Due date</label>
        <input id="due-date" type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} required />

        <label htmlFor="priority">Priority</label>
        <select id="priority" value={priority} onChange={(event) => setPriority(event.target.value)} required>
          <option value="" disabled>Choose a priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Add task <span aria-hidden="true">+</span></button>
      </form>
      <p className="session-note">Just for this session. Tasks clear when you refresh.</p>
    </section>
  );
}
