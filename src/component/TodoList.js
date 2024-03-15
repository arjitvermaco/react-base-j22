import React, { useState } from "react";

export const TodoList = ({ todoList, categories }) => {
  const [filterCategory, setFilterCategory] = useState("All");

  const handleCategoryChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const filteredTodoList = todoList.filter((item) => {
    // return filterCategory === "All" || item.category === filterCategory
    if (filterCategory === "All") {
      return item;
    } else if (item.category === filterCategory) {
      return item;
    }
  });

  console.log("Filtered TodoList:", filteredTodoList);

  return (
    <div className="mt-12">
      <h3>ToDo Items</h3>

      <select onChange={handleCategoryChange} className="inputField">
        <option value="All">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {filteredTodoList.map((item) => {
        return (
          <div
            key={item.task}
            className="bg-white flex justify-between text-gray-900 mt-4 rounded-sm p-3"
          >
            {item.task}
            <span className="text-xs bg-yellow-500 p-1 rounded-sm">
              {item.category}
            </span>
          </div>
        );
      })}
    </div>
  );
};
