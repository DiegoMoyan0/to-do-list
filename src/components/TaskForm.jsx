import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (taskName.trim() === '') return;
    addTask({ id: Date.now(), name: taskName, completed: false });
    setTaskName('');
  };

  return (
    <div>
      <h2>Añadir tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
        />
        <button type="submit">Añadir tarea</button>
      </form>
    </div>
  );
};

export default TaskForm;
