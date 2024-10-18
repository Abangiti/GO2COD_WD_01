import React, { useState } from 'react';

function Todolist() {
    const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower"]);
    const [newtasks, setNewTasks] = useState("");
    const [editIndex, setEditIndex] = useState(null); // To track which task is being edited
    const [editTask, setEditTask] = useState(""); // To track the updated task value

    // Handle input change for adding a new task
    function handleInputChange(event) {
        setNewTasks(event.target.value);
    }

    // Handle input change for editing a task
    function handleEditChange(event) {
        setEditTask(event.target.value);
    }

    // Add a new task
    function addTask() {
        if (newtasks.trim() !== "") {
            setTasks(t => [...tasks, newtasks]);
            setNewTasks(""); 
        }
    }

    // Delete a task
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    // Enter edit mode
    function startEdit(index) {
        setEditIndex(index);
        setEditTask(tasks[index]); // Set the current task in the input
    }

    // Save the edited task
    function saveEdit(index) {
        const updatedTasks = tasks.map((task, i) => 
            i === index ? editTask : task
        );
        setTasks(updatedTasks);
        setEditIndex(null); // Exit edit mode
    }

    return (
        <div className='todolist'>
            <div>
                <input
                    type="text"
                    placeholder='Enter a task...'
                    value={newtasks}
                    onChange={handleInputChange}
                    className='task-input'
                />
                <button className='button-add' onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) =>  
                    <li className='list-item' key={index}>
                        {editIndex === index ? (
                            // Show input if editing this task
                            <input 
                                type="text" 
                                value={editTask} 
                                onChange={handleEditChange}
                                className='edit-input'
                            />
                        ) : (
                            // Show the task text if not editing
                            <span className='list'>{task}</span>
                        )}

                        <div>
                            <button
                                className="button-delete task-button"
                                onClick={() => deleteTask(index)}>
                                <i className='fa fa-trash'></i>
                            </button>

                            {editIndex === index ? (
                                <button
                                    className="button-save task-button"
                                    onClick={() => saveEdit(index)}>
                                    <i className='fa fa-save'></i>
                                </button>
                            ) : (
                                <button
                                    className="button-edit task-button"
                                    onClick={() => startEdit(index)}>
                                    <i className='fa fa-edit'></i>
                                </button>
                            )}
                        </div>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default Todolist;
