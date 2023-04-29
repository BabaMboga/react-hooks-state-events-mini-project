import React from "react";
import Task from "./Task"

function TaskList({tasks, selectedCategory}) {
  const filteredTasks = selectedCategory === "All" 
  ? tasks : tasks.filter((task) => task.category === selectedCategory);
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {filteredTasks.map((task, index) => (
        <Task category={task.category} text={task.text} key={index}/>
      ))}
      
    </div>
  );
}

export default TaskList;
