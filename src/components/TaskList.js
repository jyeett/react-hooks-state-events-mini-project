import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDelete}) {
  // console.log(renderTasks)
  const tasksList = tasks.map(task => <Task key={task.text} text={task.text} category={task.category} handleDelete={handleDelete}/>)
  return (
    <div className="tasks">
      {tasksList}
    </div>
  );
}

export default TaskList;
