import React from "react";
import Task from "./Task";

function TaskList({tasks, selectedCategory}) {
  console.log(tasks)
  console.log(selectedCategory)
  const filteredTasks = selectedCategory === "All" ? tasks : tasks.filter((task) => 
     task.category === selectedCategory
  )

  const removeItemFromArray = (taskRemoved) => {
    // logic should return a new array that is filtered(removes the selected task on the X button click) and 
    // rerender the new array
    console.log(taskRemoved)
    // tasks.filter((task) => task.text === taskRemoved);
    // rerender 
  }
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {filteredTasks.map((task) => {
        return <Task handleRemove={removeItemFromArray} key={task.text} text={task.text} category={task.category}/>
      })}
    </div>
  );
}

export default TaskList;
