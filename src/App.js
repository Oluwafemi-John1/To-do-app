import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';

function App() {
    const [todoInput, settodoInput] = useState("");
    const [todoValue, settodoValue] = useState([]);
    let localdate = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let dateCreated = `${localdate}-${month}-${year}`;
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let timeCreated = `${hour}:${minute}`
    // const [date, setdate] = useState({dateCreated})
    // const [time, settime] = useState({timeCreated})
  return (
    <>
    <div className="container-fluid mt-5">
        <div className="row mx-auto col-lg-10 rounded shadow">
            <Header/>
            <Todo
            myInput = {todoInput}
            setMyInput = {settodoInput}
            myTodo = {todoValue}
            setMyTodo = {settodoValue}
            myDate = {dateCreated}
            // setMyDate = {setdate}
            myTime = {timeCreated}
            // setMyTime = {settime}
            />
        </div>
    </div>
    </>
  );
}

export default App;
