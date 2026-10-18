export default function TaskCard({ task }) {

  const formattedDate = new Date(`${task.dueDate}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
  });

  return (
    <article className="task-card">
      <span className={`priority priority-${task.priority.toLowerCase()}`}><span aria-hidden="true">●</span> {task.priority} priority</span>
      <h3>{task.name}</h3>
      <div className="task-date"><span>Due date</span><time dateTime={task.dueDate}>{formattedDate}</time></div>
    </article>
  );
}
