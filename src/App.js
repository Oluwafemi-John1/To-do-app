import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
    const [todoInput, settodoInput] = useState("");
    const [todoValue, settodoValue] = useState([]);

    let date = new Date();
    let dateCreated = date.toLocaleDateString();
    let timeCreated = date.toLocaleTimeString();

  return (
    <>
    <div className="container-fluid mt-lg-5">
        <Todo
        myInput = {todoInput}
        setMyInput = {settodoInput}
        myTodo = {todoValue}
        setMyTodo = {settodoValue}
        myDate = {dateCreated}
        myTime = {timeCreated}
        />
    </div>
    </>
  );
}

export default App;