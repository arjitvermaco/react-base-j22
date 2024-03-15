import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const TodoComponent = () => {
  const [todoList, setTodoList] = useState([]);
  const categories = ["Work", "Personal", "Others"];

  //When component loads get data from localstorage 
  //When todolist changes save data to localstorage

//   useEffect(callbackFunction , arrayofdependencies)
// [todoList]

//three ways to use useEffect

// 1. Empty Dependency array 
// It will run only on component load
useEffect(()=>{
console.log("1.component was loaded . so effect is running !!")
},[])


// 2.With items in dependency array 
//It will run on component load
// It will also on when any item in dependency array is changed

useEffect(()=>{
    //Save todolist to locals
},[todoList])

//3.With no dependency array
// It will run on load
// Also when any state is changed

useEffect(()=>{
     console.log("3.Will run on load and also when any state is changed in the component")
})


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
