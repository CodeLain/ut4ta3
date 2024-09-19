import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const ToDoList = ({taskList, deleteTask}) => {
  return (
    <ul>
      {taskList.map((task, index) => (
        <li key={index}>
          {task}
          <button 
            onClick={() => deleteTask(index)} 
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

function App() {
  const [taskText, setTaskText] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleAddTask = () => {
    setTaskList([...taskList, taskText]);
    setTaskText('');
  };

  const handleDeleteTask = (index) => {
    setTaskList(taskList.filter((taskText, taskIndex) => taskIndex !== index));
  };



  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <input
          type="text"
          value={taskText}
          onChange={handleInputChange}
          placeholder="Nueva tarea"
        />
        <button onClick={handleAddTask}>Add Task</button>
        <ToDoList taskList={taskList} deleteTask={handleDeleteTask} />
      </header>
    </div>
  );
}

export default App;
