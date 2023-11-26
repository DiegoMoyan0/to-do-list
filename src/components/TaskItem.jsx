/*import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';

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
      timer: 1500,
    });
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
        onClick={() => {
          handleCompleteWithAlert();
        }}
      >
        {task.completed && <span className="checkmark">&#10003;</span>}
      </div>
      <span className={task.completed ? 'task-name completed' : 'task-name'}>
        {task.name}
      </span>
      {// Mostrar la categoría en el menú desplegable }
      <div className="menu-button" onClick={toggleMenu}>
        &#8942;
        {showMenu && (
          <div className="task-menu" ref={menuRef}>
            <div className="menu-item">
              {// Verificar si la tarea tiene una categoría y mostrarla }
              {task.category ? `Categoría: ${task.category}` : 'Sin categoría'}
            </div>
            <div
              className="menu-item"
              onClick={() => {
                handleCompleteWithAlert();
              }}
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
            {}
          </div>
        )}
      </div>
    </li>
  );
};

export default TaskItem;*/
import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';

const TaskItem = ({ task, handleComplete, handleDelete, handleToggleMenu }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

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
          <div className="task-menu" ref={menuRef}>
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




