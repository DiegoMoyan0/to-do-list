import React, { useState } from 'react';

const TaskForm = ({ addTask, addTaskList }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (taskName.trim() === '') return;
    addTask({ id: Date.now(), name: taskName, completed: false });
    setTaskName('');
  };

  const handleAddList = () => {
    // Llamando a la función addTaskList para crear una nueva lista de tareas
    addTaskList();
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
      <button onClick={handleAddList}>Crear nueva lista de tareas</button>
    </div>
  );
};

export default TaskForm;
