import ToDo from "./ToDo";

export default function ToDoList({ toDoList, handleToggle, handleFilter }) {
  return (
    <div>
      {toDoList.map((todo) => {
        return <ToDo todo={todo} handleToggle={handleToggle} />;
      })}
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        Clear Completed
      </button>
    </div>
  );
}
