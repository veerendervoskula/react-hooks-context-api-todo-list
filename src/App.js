import React from 'react';
import SearchBar from './components/AddTaskBar';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <TaskList />
      </header>
    </div>
  );
}

export default App;