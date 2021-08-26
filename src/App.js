import "./styles.css";
import data from "./data.json";
import React, { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

export default function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id == id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
    console.log("handleToggle");
    console.log(toDoList);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false }
    ];
    setToDoList(copy);
  };

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <ToDoForm addTask={addTask} />
      <ToDoList
        toDoList={toDoList}
        handleFilter={handleFilter}
        handleToggle={handleToggle}
      />
    </div>
  );
}
