import { useState } from 'react';
import Form from './components/Form';
import  Display from './components/Display';
import './App.css';

function App() {
  const [addTodoList, setAddTodoList]= useState([])
  return (
    <div className="App">
      <Form addTodoList={addTodoList} setAddTodoList={setAddTodoList}/>
      
      <header className='fs-1 fw-bold'>My To-Do List</header>
      <Display addTodoList={addTodoList}/>
    </div>
  );
}

export default App;
