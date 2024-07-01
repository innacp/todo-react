import "./App.css";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="App min-w-80 min-h-96 px-[20px] rounded-md flex flex-col gap-[30px] bg-indigo-100 items-center justify-center shadow-xl">
      <h1 className="text-xl font-bold">Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
