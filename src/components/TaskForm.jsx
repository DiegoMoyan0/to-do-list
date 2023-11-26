import React, { useState } from 'react';

const TaskForm = ({ addTask, isVisible, onClose }) => {
  const [taskName, setTaskName] = useState('');
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (taskName.trim() === '') return;
    addTask({ id: Date.now(), name: taskName, category: categoryName, completed: false });
    setTaskName('');
    setCategoryName('');
    onClose(); 
  };

  if (!isVisible) return null;

  return (
    <div className='form'>
      <p>Nueva tarea</p>
      <form id='form' onSubmit={handleSubmit}>
        <input
          className='task-input'
          type="text"
          placeholder="Nombre de la tarea"
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          autoFocus
        />
        <br />
        <input
          className='task-input'
          type="text"
          placeholder="Categoría (opcional)"
          value={categoryName}
          onChange={e => setCategoryName(e.target.value)}
        />
        <br />
        <button type="submit" className='add-task-button'>Agregar tarea</button>
      </form>
    </div>
  );
};

export default TaskForm;

