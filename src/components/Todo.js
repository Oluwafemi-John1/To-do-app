import React, { useState } from 'react'
import pix from "../assets/images/undraw_to_do_list_re_9nt7.svg"

const Todo = ({myInput,setMyInput,myTodo,setMyTodo,myDate,myTime}) => {
    const [count, setcount] = useState("0");
    const [editedTodo, seteditedTodo] = useState(0)
    const [editedInput, seteditedInput] = useState({})
    const [editTodos, seteditTodos] = useState("")
    const [message, setmessage] = useState("")

    console.log(myDate);
    // console.log(myTodo);
    const addTodo = () => {
        if (myInput !== "") {
            let newTodo = {myInput,myDate,myTime}
            setMyTodo([...myTodo,newTodo]);
            setcount(myTodo.length+1)
            setMyInput("")
            setmessage("")
        } else {
            setmessage("Input your todo!")
        }
    }

    const deleteTodo = (index) => {
        let addedTodo = [...myTodo]
        addedTodo.splice(index,1)
        setMyTodo(addedTodo)
        setcount(myTodo.length-1)
    }

    const editTodo = (index) => {
        seteditedTodo(index)
        let currentTodo = myTodo[index]
        seteditTodos(currentTodo.myInput)
        seteditedInput(currentTodo)
    }

    const updateTodo = () => {
        let updatedTodo = {myInput:editTodos,myDate,myTime}
        let newTodos = [...myTodo]
        newTodos[editedTodo] = updatedTodo
        setMyTodo(newTodos)
    }
  return (
		<>
        <section className='row'>
			<div className="col-lg-3 shadow rounded-5 px-2 mx-lg-5">
                <div className="py-lg-5 mx-auto">
                    <h3 className='text-center mb-lg-5'>To Do</h3>
                    <center><div className='mx-auto'><img src={pix} alt="" width={350} /></div></center>
                    <marquee behavior="alternate" direction="up"><div className="text-center fs-4 mt-2 text-dark">{message}</div></marquee>
                    <input
                        type="text"
                        className="my-1 py-3 mx-auto form-control w-75 mt-5 rounded-pill"
                        placeholder="Enter your to-do"
                        value={myInput}
                        required
                        maxLength={15}
                        onChange={(e) => setMyInput(e.target.value)}
                    />
                    <button className="btn btn-primary shadow-lg my-1" id='button' onClick={addTodo}>+</button>
                    <div className="fs-5 text-light text-center mx-auto py-2">You have {count} pending task(s)</div>
                </div>

            </div>


			{/* Table display */}
			<div className="mt-3 col-lg-6 col-sm-10">
				{myTodo.map((input, index) => (
					<>
						<div className="my-2 text-dark">
                            <li className='d-flex rounded shadow-lg px-4' style={{backgroundColor:"rgb(10, 10, 292)"}}>
                                <li className="col-1 py-2">{index + 1}</li>
                                <li className="col-3 py-2">{input.myInput}</li>
                                <li className="col-2 py-2"><small>{input.myDate}</small></li>
                                <li className="col-3 py-2"><small>{input.myTime}</small></li>
                                <li className="col-4 mx-auto py-2">
                                    <button className="btn btn-outline-none mx-2 border-0 col-lg-3 col-sm-4" data-bs-toggle="modal" id='buttons' data-bs-target="#exampleModal" onClick={() => editTodo(index)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill text-warning" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg></button>
                                    <button className="btn border-0 btn-outline-none mx-2 col-sm-4 col-lg-4 text-center" id='buttons' onClick={() => deleteTodo(index)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill text-danger" viewBox="0 0 16 16"><path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/></svg></button>
                                </li>
                            </li>
							</div>
						

						<div
							className="modal fade"
							id="exampleModal"
							tabIndex="-1"
							aria-labelledby="exampleModalLabel"
							aria-hidden="true"
						>
							<div className="modal-dialog">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="exampleModalLabel">Edit Todo {editedTodo.myInput}</h5>
										<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>

									<div className="modal-body">
										<input type="text" className="form-control" value={editTodos} onChange={(e) => seteditTodos(e.target.value)}
										/>
									</div>

									<div className="modal-footer">
										<button className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
										<button className="btn btn-primary" data-bs-dismiss="modal" onClick={updateTodo}>Save Changes</button>
									</div>
								</div>
							</div>
						</div>
					</>
				))}
			</div>
        </section>
		</>
	);
}

export default Todo