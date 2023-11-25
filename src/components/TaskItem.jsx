import React, { useState } from 'react';

const TaskItem = ({ task, handleComplete, handleDelete }) => {
  const [completed, setCompleted] = useState(false);

  const toggleComplete = () => {
    setCompleted(!completed);
    handleComplete(task.id);
  };

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {task.name}
      <button onClick={toggleComplete}>Completado</button>
      <button onClick={handleDelete}>Eliminar</button>
    </li>
  );
};

export default TaskItem;
