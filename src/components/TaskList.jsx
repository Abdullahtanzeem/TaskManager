export const TaskList = ({ tasklist, setTasklist, task, setTask }) => {
    // Function to handle editing a task
    const handleEdit = (id) => {
      const selectedTask = tasklist.find((task) => task.id === id); // Find the task by ID
      setTask(selectedTask); // Set the selected task in state for editing
    };
  
    // Function to handle deleting a task
    const handleDelete = (id) => {
      const updatedTasklist = tasklist.filter((task) => task.id !== id); // Remove task from list
      setTasklist(updatedTasklist); // Update state with filtered list
  
      // If the deleted task is currently being edited, clear the editing state
      if (task.id === id) {
        setTask({});
      }
    };
  
    return (
      <section className="showTask">
        {/* Header section displaying title and task count */}
        <div className="head">
          <div>
            <span className="title">Todo</span>
            <span className="count">{tasklist.length}</span> {/* Display total number of tasks */}
          </div>
          {/* Button to clear all tasks */}
          <button className="clearAll" onClick={() => setTasklist([])}>
            Clear
          </button>
        </div>
  
        {/* List of tasks */}
        <ul>
          {tasklist.map((taskItem) => (
            <li key={taskItem.id}>
              <p>
                <span className="taskName">{taskItem.name}</span> {/* Task name */}
                <span className="time">{taskItem.time}</span> {/* Task creation time */}
              </p>
              {/* Edit button */}
              <i
                onClick={() => handleEdit(taskItem.id)}
                className="bi bi-pencil-square"
                role="button"
                aria-label="Edit task"
              ></i>
              {/* Delete button */}
              <i
                onClick={() => handleDelete(taskItem.id)}
                className="bi bi-trash"
                role="button"
                aria-label="Delete task"
              ></i>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  