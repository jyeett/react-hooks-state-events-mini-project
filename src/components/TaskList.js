import React, { useState } from "react";
import Task from "./Task";

function TaskList({renderTasks, handleDelete}) {
  // console.log(currTasks)
  const tasks = 
    renderTasks.map(task => <Task key={task.text} data={task} handleDelete={handleDelete}/>)
    
  
  return (
    <div className="tasks">
      {tasks}
    </div>
  );
}

export default TaskList;
