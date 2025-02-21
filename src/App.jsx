import React, { useEffect, useState } from 'react';
import { Header } from './components/Header'; // Import Header component
import { AddTask } from './components/AddTask'; // Import AddTask component
import { TaskList } from './components/TaskList'; // Import TaskList component
import './App.css'; // Import CSS file for styling

function App() {
  // State to manage the list of tasks
  // Retrieves the task list from localStorage or initializes it as an empty array
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);

  // State to track the currently selected task for editing
  const [task, setTask] = useState({});

  // useEffect to update localStorage whenever tasklist changes
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist)); // Save tasklist to localStorage
  }, [tasklist]); // Runs every time tasklist is updated

  return (
    <div className="App">
      {/* Header Component */}
      <Header />

      {/* AddTask Component - Handles adding new tasks and updating existing ones */}
      <AddTask 
        tasklist={tasklist} 
        setTasklist={setTasklist} 
        task={task}
        setTask={setTask}
      />

      {/* TaskList Component - Displays all tasks and provides edit & delete functionality */}
      <TaskList 
        tasklist={tasklist} 
        setTasklist={setTasklist} 
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
