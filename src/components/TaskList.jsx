import TaskCard from './TaskCard.jsx';

export default function TaskList({ tasks }) {
  return (
    <section className="tasks-panel" aria-labelledby="tasks-title">
      <div className="tasks-heading">
        <div>
          <span className="section-number">02 / GET GOING</span>
          <h2 id="tasks-title">Your tasks <span className="task-count">{tasks.length}</span></h2>
        </div>
        <span className="list-caption" role="status">{tasks.length === 1 ? '1 task added' : `${tasks.length} tasks added`}</span>
      </div>
      {tasks.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon" aria-hidden="true">✓</span>
          <h3>A fresh start.</h3>
          <p>Add your first task and give your day a little direction.</p>
          <span className="empty-hint">Big plans start with one small step.</span>
        </div>
      ) : (
        <div className="task-grid">
          {tasks.map((task) => <TaskCard key={task.id} task={task} />)}
        </div>
      )}
    </section>
  );
}
