import React from 'react';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header />
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
