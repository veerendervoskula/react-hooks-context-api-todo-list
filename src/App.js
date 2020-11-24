import React, { useEffect } from 'react';
import SearchBar from './components/AddTaskBar';
import TaskList from './components/TaskList';
import ToggleSwitch from './components/ToggleSwitch';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToggleSwitch/>
        <SearchBar />
        <TaskList />
      </header>
    </div>
  );
}

export default App;