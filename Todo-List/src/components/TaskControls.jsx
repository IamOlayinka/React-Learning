import React from 'react';

const FILTERS = ['all', 'active', 'completed'];

export default function TaskControls({
  tasks = [],
  filter = 'all',
  onFilterChange = () => {},
  onClearCompleted = () => {},
}) {
  const activeCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.length - activeCount;

  return (
      <div className="task-controls">
        <h3>Task Controls</h3>
      <span className="task-controls__summary">
        {activeCount} item{activeCount === 1 ? '' : 's'} left
      </span>

      <div className="task-controls__filters" role="group" aria-label="Task filters">
        {FILTERS.map((option) => (
          <button
            key={option}
            type="button"
            className={
              filter === option
                ? 'task-controls__filter is-active'
                : 'task-controls__filter'
            }
            onClick={() => onFilterChange(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      {completedCount > 0 && (
        <button
          type="button"
          className="task-controls__clear"
          onClick={onClearCompleted}
        >
          Clear completed
        </button>
      )}
    </div>
  );
}
