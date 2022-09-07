import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';

function App() {
    const [todoInput, settodoInput] = useState("");
    const [todoValue, settodoValue] = useState([]);

    let date = new Date();
    let dateCreated = date.toLocaleDateString();
    let timeCreated = date.toLocaleTimeString();

  return (
    <>
    <div className="container-fluid mt-5">
        <div className="row mx-auto col-lg-10 rounded shadow-lg">
            <Header/>
            <Todo
            myInput = {todoInput}
            setMyInput = {settodoInput}
            myTodo = {todoValue}
            setMyTodo = {settodoValue}
            myDate = {dateCreated}
            myTime = {timeCreated}
            />
        </div>
    </div>
    </>
  );
}

export default App;