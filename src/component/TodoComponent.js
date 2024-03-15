import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const TodoComponent = () => {
  const [todoList, setTodoList] = useState([]);
  const categories = ["Work", "Personal", "Others"];

//   Fetching from localStorage: On component mount, check if there's any saved todo list in localStorage. If there is, update the state with this data.
useEffect(()=>{
   const storedTodoList = localStorage.getItem('todoList');
   if(storedTodoList){
    setTodoList(JSON.parse(storedTodoList))
   } 
},[])

// Saving to localStorage: Whenever the todoList state changes, save the new state to localStorage.

useEffect(()=>{
    localStorage.setItem('todoList', JSON.stringify(todoList))
},[todoList])

  return (
    <div className="max-w-xl">
      <TodoForm
        setTodoList={setTodoList}
        categories={categories}
        todoList={todoList}
      />
      <TodoList categories={categories} todoList={todoList} />
    </div>
  );
};
