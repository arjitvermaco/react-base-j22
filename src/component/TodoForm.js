import React, { useState } from "react";

export const TodoForm = ({ todoList, setTodoList ,categories}) => {
 
  const [todoItem, setTodoItem] = useState({
    task: "",
    category: categories[0],
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTodoItem({ ...todoItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoItem.task && todoItem.category) {
      //Add item to array
      console.log(todoItem);
      setTodoList([...todoList, todoItem]);
      //Empty Form after todo is added
      setTodoItem({
        task: "",
        category: categories[0],
      });
    } else {
      setError("Both Todo item and category are required!!");
    }
  };

  return (
    <div>
      <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5 w-full">
          <label
            for="task"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Todo Item
          </label>
          <input
            type="text"
            id="task"
            name="task"
            className="inputField"
            placeholder="Buy Milk..."
            value={todoItem.task}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select A category
          </label>
          <select
            id="category"
            className="inputField"
            name="category"
            onChange={handleChange}
            value={todoItem.category}
          >
            <option  value={null}>
              Choose a category
            </option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {error && <p className="text-red-500 text-xs">{error}</p>}

        <button type="submit" className="formButton">
          Add Todo
        </button>
      </form>
    </div>
  );
};
