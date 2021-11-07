import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  // let taskList = TASKS
  const [currTasks, setCurrTasks] = useState(TASKS)
  const [categorySelected, setCategorySelected] = useState('All')
  const [renderTasks, setRenderTasks] = useState(currTasks)
  
  function handleDelete(key) {
    const taskList = renderTasks.filter(task => task.text !== key)
    // console.log(taskList)
    setCurrTasks(currTasks.filter(task => task.text !== key))
    setRenderTasks(taskList)
  }

  function handleSelect(category) {
    setCategorySelected(category)
    if (category === 'All') {
      setRenderTasks(currTasks)
    } else {
      const filteredTasks = currTasks.filter(task => task.category === category)
      // console.log(taskList)
      setRenderTasks(filteredTasks)
    }
  }

  function onTaskFormSubmit(newTask) {
    setCurrTasks([...currTasks, newTask])
    setRenderTasks([...currTasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categorySelected={categorySelected} handleSelect={handleSelect} categories={CATEGORIES}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={renderTasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
