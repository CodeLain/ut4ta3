import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const ToDoList = ({taskList, deleteTask, editTask}) => {
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
          <button 
            onClick={() => editTask(index)} 
          >
            Edit task
          </button>
        </li>
      ))}
    </ul>
  );
};

function App() {
  const [taskText, setTaskText] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [edditing , setEdditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

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

  const handleEditTask = (index) => {
    let task = taskList[index];
    setTaskText(task);
    setEdditing(true);
    setEditIndex(index);
  };

  const handleEditSave = () => {
    taskList[editIndex] = taskText;
    setTaskText('');
    setEditIndex(null);
    setEdditing(false);
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
         {edditing ? 
          <button onClick={handleEditSave}>SAve Eddit</button>
          : <button onClick={handleAddTask}>Add Task</button>}
       
        <ToDoList taskList={taskList} deleteTask={handleDeleteTask} editTask={handleEditTask} />
      </header>
    </div>
  );
}

export default App;
