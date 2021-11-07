import React from "react";

function Task({text, category, handleDelete}) {
  // console.log(data)
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleDelete(text)}>X</button>
    </div>
  );
}

export default Task;
