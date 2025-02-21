import React from "react";

export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  // Function to handle form submission (adding/updating a task)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    const date = new Date(); // Get current date and time

    if (task.id) {
      // If task has an `id`, it means we're updating an existing task
      const updatedTasklist = tasklist.map((tasklistItem) =>
        tasklistItem.id === task.id
          ? {
              ...tasklistItem, // Keep other properties unchanged
              name: task.name, // Update task name
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` // Update timestamp
            }
          : tasklistItem
      );

      setTasklist(updatedTasklist); // Update task list with the modified task
      setTask({}); // Reset the task state after updating
    } else {
      // If task has no `id`, create a new task
      const newTask = {
        id: date.getTime(), // Unique ID based on timestamp
        name: e.target.task.value, // Get task name from input field
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` // Store creation time
      };

      setTasklist([...tasklist, newTask]); // Add new task to the list
      setTask({}); // Reset task state after adding
      e.target.task.value = ""; // Clear input field
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        {/* Input field for entering a new task or editing an existing one */}
        <input
          type="text"
          name="task"
          value={task.name || ""} // Ensure input doesn't break when `task.name` is undefined
          autoComplete="off"
          placeholder="Add task..."
          maxLength="25"
          onChange={(e) => setTask({ ...task, name: e.target.value })} // Update task state on input change
        />
        {/* Button changes text dynamically based on task state */}
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
