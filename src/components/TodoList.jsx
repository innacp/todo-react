import React, { useState } from 'react';

export function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");



    function handleChange(e) {
        setNewTask(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setTasks([...tasks, newTask])
        setNewTask('')
    }

    function removeTask(id){
        setTasks(tasks.filter((task) => task.id !==id));
    }
    
    return(
        <div>
            <form className="flex gap-[10px]" >
                <input type="text" value={newTask} onChange={handleChange} className="outline-none border border-slate-300 rounded-md px-[5px]" />
                <button onClick={handleSubmit} className="shadow-md bg-white rounded-md px-[10px] py-[5px]" >Add Task</button>
            </form>
            <ul>
                {tasks.map((task) => (
                    <li key={task}>{task}
                    
                        <button className="shadow-md bg-white rounded-md px-[10px] py-[5px]" 
                        onClick={removeTask}
                       
                        >Delete</button>
                    
                    </li>
                ))}
            </ul>
        </div>
    )
}