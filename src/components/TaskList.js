import React from "react";
import Task from "./Task"

function TaskList({tasks}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index) => (
        <Task category={task.category} text={task.text} key={index}/>
      ))}
      
    </div>
  );
}

export default TaskList;
