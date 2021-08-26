import { useState } from "react";
export default function ToDoForm({ addTask }) {
  const [userInput, SetUserInput] = useState("");
  const handleChange = (e) => {
    SetUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    SetUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={userInput} type="text" onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}
