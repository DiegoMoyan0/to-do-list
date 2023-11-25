import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, handleComplete, handleDelete }) => {
  return (
    <div>
      <h1>Lista de tareas</h1>
      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            handleComplete={() => handleComplete(task.id)}
            handleDelete={() => handleDelete(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;