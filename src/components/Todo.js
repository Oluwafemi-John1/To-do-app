import React, { useState } from 'react'

const Todo = ({myInput,setMyInput,myTodo,setMyTodo}) => {
    const [count, setcount] = useState("0");
    const [editedTodo, seteditedTodo] = useState(0)

    const addTodo = () => {
        let newTodo = {myInput}
        if (myInput != "") {
            setMyTodo([...myTodo,newTodo]);
            setcount(myTodo.length+1)
            setMyInput("")
        } else {
            alert("Please fill in your to-do😊")
        }
    }

    const deleteTodo = (index) => {
        let addedTodo = [...myTodo]
        addedTodo.splice(index,1)
        setcount(myTodo.length-1)
        setMyTodo(addedTodo)
    }

    const editTodo = (index) => {
        seteditedTodo(index)
    }

    const updateTodo = () => {
        let updatedTodo = [...myTodo]
        updatedTodo[editedTodo] = {myTodo}
        setMyTodo("")
        setMyTodo(updatedTodo)
    }
  return (
		<>
			<div className="py-3 mx-auto">
				<input
					type="text"
					className="my-1 mx-auto form-control w-75"
					placeholder="Enter your to-do"
					value={myInput}
					required
					maxLength={20}
					onChange={(e) => setMyInput(e.target.value)}
				/>
			</div>

			<div align="center">
				<button className="btn btn-success my-1 w-75" onClick={addTodo}>
					Add
				</button>
			</div>

			<div className="fs-5 text-info text-center">
				You have {count} pending task(s)
			</div>

			{/* Table display */}
			<div className="mt-3">
				<table className="table table-striped">
					<thead>
						<tr className="text-warning">
							<td>S/N</td>
							<td>Todo</td>
							<td>Date</td>
							<td>Time</td>
							<td>Action</td>
						</tr>
					</thead>
				</table>

				{myTodo.map((myTodo, index) => (
					<>
						<table className="table table-striped text-center">
							<tr className="my-2 text-warning">
								<td className="col-1 px-lg-3">{index + 1}</td>
								<td className="col-3 px-lg-3">{myTodo.myInput}</td>
								<td className="col-2">{myTodo.myDate}</td>
								<td className="col-2">{myTodo.myTime}</td>
								<td className="col-4 mx-auto py-2">
									<button
										className="btn btn-warning mx-2 col-lg-2 col-sm-4"
										data-toggle="modal"
										data-target="#exampleModal"
										onClick={() => editTodo(index)}
									>
										Edit
									</button>

									<button
										className="btn btn-danger mx-2 col-sm-4 col-lg-3 text-center"
										onClick={() => deleteTodo(index)}
									>
										Delete
									</button>
								</td>
							</tr>
						</table>

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
										<h5 className="modal-title" id="exampleModalLabel">
											Edit Details for{" "}
										</h5>
										<button
											type="button"
											className="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>

									<div className="modal-body">
										<input
											type="text"
											className="form-control"
											value={myInput}
											placeholder={myTodo[editedTodo].myInput}
											onChange={(e) => setMyInput(e.target.value)}
										/>
									</div>

                                    <div className="modal-footer">
                                        <button className="btn btn-secondary" type='button' data-dismiss="modal">Close</button>
                                        <button className="btn btn-primary" data-dismiss="modal" onClick={updateTodo}></button>
                                    </div>
								</div>
							</div>
						</div>
					</>
				))}
			</div>
		</>
	);
}

export default Todo