import React from "react";

function CategoryFilter({categories, handleSelect, categorySelected}) {
  const categoriesBtns = categories.map(category => <button 
    className={categorySelected === category ? 'selected' : ''} 
    key={category} 
    onClick={(e) => handleSelect(e.target.textContent)}>{category}</button>)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesBtns}
    </div>
  );
}

export default CategoryFilter;
