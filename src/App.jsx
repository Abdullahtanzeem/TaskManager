import React, { useState } from 'react';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';
import './App.css';

function App() {
  const [tasklist, setTasklist] = useState([]);
  return (
    <div className="App">
      
      <Header />
      <AddTask tasklist={tasklist} setTasklist= {setTasklist} />
      <TaskList tasklist={tasklist} setTasklist= {setTasklist}  />
    </div>
  );
}

export default App;
