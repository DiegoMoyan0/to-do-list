import React, { useState, useEffect, useRef } from 'react';

const TaskItem = ({ task, handleComplete, handleDelete }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(); 

  const toggleMenu = () => {
    setShowMenu(!showMenu);
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
      <div className="task-status">
        {task.completed && <span className="checkmark">&#10003;</span>}
      </div>
      <span className={task.completed ? 'task-name completed' : 'task-name'}>{task.name}</span>
      <div className="menu-button" onClick={toggleMenu}>&#8942;</div>
      {showMenu && (
        <div className="task-menu" ref={menuRef}>          
          <div className="menu-item" onClick={() => { handleComplete(task.id); setShowMenu(false); }}>
            {task.completed ? 'Desmarcar tarea' : 'Marcar como hecha'}
          </div>
          <div className="menu-item" onClick={() => { handleDelete(task.id); setShowMenu(false); }}>Eliminar tarea</div>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
