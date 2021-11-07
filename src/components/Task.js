import React from "react";

function Task({data, handleDelete}) {
  // console.log(data)
  return (
    <div className="task">
      <div className="label">{data.category}</div>
      <div className="text">{data.text}</div>
      <button className="delete" onClick={() => handleDelete(data.text)}>X</button>
    </div>
  );
}

export default Task;
