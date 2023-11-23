import React, { useState, useEffect } from "react";
import DateNavigator from "./DateNavigator";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isFormVisible, setFormVisible] = useState(false);
  const [tasks, setTasks] = useState(() => {
   
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
 
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, date: selectedDate, completed: false }]);
    setFormVisible(false);
  };

  const handleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.date &&
      new Date(task.date).toDateString() === selectedDate.toDateString()
  );

  return (
    <>
      <div className="form-border">
        <div className="form-general">
          <DateNavigator
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
            onAddClick={() => setFormVisible(true)}
          />
          {isFormVisible && (
            <TaskForm
              addTask={addTask}
              isVisible={isFormVisible}
              onClose={() => setFormVisible(false)}
            />
          )}
          <ul>
            {filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                handleComplete={() => handleComplete(task.id)}
                handleDelete={() => handleDelete(task.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TaskList;
