import React, { useState } from 'react';
import Swal from 'sweetalert2';

const TaskItem = ({ task, handleComplete, handleDelete, handleToggleMenu }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleCompleteWithAlert = () => {
    let completed = !task.completed;

    handleComplete(task.id, completed);
    setShowMenu(false);

    if (completed) {
      Swal.fire({
        icon: 'success',
        title: '¡Tarea completada!',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <li
      className="task-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundColor: isHovered ? 'lightblue' : 'transparent' }}
    >
      <div
        className="task-status"
        onClick={handleCompleteWithAlert}
      >
        {task.completed && <span className="checkmark">&#10003;</span>}
      </div>
      <span className={task.completed ? 'task-name completed' : 'task-name'}>
        {task.name}
      </span>
      <div className="menu-button" onClick={toggleMenu}>
        &#8942;
        {showMenu && (
          <div className="task-menu">
            <div className="menu-item">
              {task.category ? `Categoría: ${task.category}` : 'Sin categoría'}
            </div>
            <div
              className="menu-item"
              onClick={handleCompleteWithAlert}
            >
              {task.completed ? 'Desmarcar tarea' : 'Marcar como hecha'}
            </div>
            <div
              className="menu-item"
              onClick={() => {
                handleDelete(task.id);
                setShowMenu(false);
              }}
            >
              Eliminar tarea
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default TaskItem;




