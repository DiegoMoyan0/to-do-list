import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2'; // Importa SweetAlert

const TaskItem = ({ task, handleComplete, handleDelete, handleToggleMenu }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleCompleteWithAlert = () => {
    handleComplete(task.id);
    setShowMenu(false);

    Swal.fire({
      icon: 'success',
      title: '¡Tarea completada!',
      showConfirmButton: false,
      timer: 1500, // Cierra automáticamente el mensaje después de 1.5 segundos
    });
  };

  const handleUncomplete = () => {
    handleComplete(task.id);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  return (
    <li className="task-item">
      <div
        className="task-status"
        onClick={task.completed ? handleUncomplete : handleCompleteWithAlert}
      >
        {task.completed && <span className="checkmark">&#10003;</span>}
      </div>
      <span className={task.completed ? 'task-name completed' : 'task-name'}>
        {task.name}
      </span>
      <div className="menu-button" onClick={toggleMenu}>
        &#8942;
      </div>
      {showMenu && (
        <div className="task-menu" ref={menuRef}>
          <div
            className="menu-item"
            onClick={task.completed ? handleUncomplete : handleCompleteWithAlert}
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
          {/* Agregar aquí otra funcionalidad adicional */}
        </div>
      )}
    </li>
  );
};

export default TaskItem;



