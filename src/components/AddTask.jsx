import React from "react";

export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();

    if (task.id) {
      // Updating an existing task
      const updatedTasklist = tasklist.map((tasklistItem) =>
        tasklistItem.id === task.id
          ? { ...tasklistItem, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` }
          : tasklistItem
      );

      setTasklist(updatedTasklist);
      setTask({}); // Reset task after updating
    } else {
      // Adding a new task
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      };

      setTasklist([...tasklist, newTask]);
      setTask({}); // Reset task after adding
      e.target.task.value = ""; // Clear input
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name || ""}
          autoComplete="off"
          placeholder="Add task..."
          maxLength="25"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
