import React from "react";
import { useState } from "react/cjs/react.development";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const options = categories.slice(1).map(category => <option key={category} value={category}>{category}</option>)
  const [taskData, setTaskData] = useState({
    text: '',
    category: 'Code'
  })

  function handleSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit(taskData)
    setTaskData({text: '', category: 'Code'})
  }

  function handleChange(e) {
    // console.log(e.target.name)
    setTaskData({...taskData, [e.target.name]: e.target.value})
  }

  function handleCategory(e) {
    setTaskData({...taskData, [e.target.name]: e.target.value})
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskData.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={taskData.category} onChange={handleCategory}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
