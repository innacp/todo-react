export function TodoList() {
    
    return(
        <div>
            <form className="flex gap-[10px]" >
                <input type="text" className="border border-slate-300 rounded-md" />
                <button className="shadow-md bg-white rounded-md px-[10px] py-[5px]" >Add Task</button>
            </form>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}