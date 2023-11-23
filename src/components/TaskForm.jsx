import React, { useState } from 'react';

const TaskForm = ({ addTask, isVisible, onClose }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (taskName.trim() === '') return;
    addTask({ id: Date.now(), name: taskName, completed: false });
    setTaskName('');
    onClose(); 
  };

  if (!isVisible) return null;

  return (
    <div className='form'>
      <p>Nueva tarea</p>
      <form onSubmit={handleSubmit}>
        <input
          className='task-input'
          type="text"
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          autoFocus
        />
      </form>
        <p  onClick={handleSubmit} className='add-task-button'>Agregar tarea</p>
    </div>
  );
};

export default TaskForm;
