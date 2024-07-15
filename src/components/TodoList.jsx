import React, { useState, useEffect } from 'react';

export function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    
    useEffect(() => {
       const savedTasks = JSON.parse(localStorage.getItem('tasks'));
       if(savedTasks) {
        setTasks(savedTasks);
       }
    }, []);

    function handleChange(e) {            
        setNewTask(e.target.value)        //passing value of an input field
    }

    function addTask(e) {
        e.preventDefault()
        if (newTask.trim()) {
            const taskId = Date.now() + Math.random().toString(36).substring(2);
            const updatedTasks = ([...tasks, { taskId: taskId, text: newTask, completed: false}]);
            setTasks(updatedTasks);
            setNewTask('');
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            // setTasks([...tasks, { taskId: taskId, text: newTask, completed: false}])
            // setNewTask('')
        }
        // const updatedTasks = [...tasks, newTask];
        // setTasks(updatedTasks);
        // setNewTask('');
        // localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    function removeTask(id){
        setTasks(tasks.filter((task) => task.taskId !== id));
    }
    
    return(
        <div>
            <form className="flex gap-[10px]" >
                <input type="text" value={newTask} onChange={handleChange} className="outline-none border border-slate-300 rounded-md px-[5px]" />
                <button onClick={addTask} className="shadow-md bg-white rounded-md px-[10px] py-[5px]" >Add Task</button>
            </form>
            <ul>
                {tasks.map((task) => (
                    <li key={task.taskId}>{task.text}
                    
                        <button onClick={() => removeTask(task.taskId)} className="shadow-md bg-white rounded-md px-[10px] py-[5px]"                  
                        
                        >Delete</button>
                    
                    </li>
                ))}
            </ul>
        </div>
    )
}