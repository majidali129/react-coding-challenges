import { ChangeEvent, FormEvent, useState } from "react";

const data = [
  { text: "Task 1", completed: false },
  { text: "Task 2", completed: true },
  { text: "Task 3", completed: false },
];
const TodoList = () => {
  const [todos, setTodos] = useState(data);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("");

  const handleItemChecked = (todoValue: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.text === todoValue ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleAddNewtodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    setTodos((prevTodos) => [...prevTodos, { text: input, completed: false }]);
    setInput("");
  };

  const handleItemDelete = (value: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.text !== value));
  };

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilter(value);
  };

  const filteredTodos = todos.filter((todo) =>
    filter === "completed"
      ? todo.completed
      : filter === "uncompleted"
      ? !todo.completed
      : true
  );

  return (
    <div className="p-4 space-y-4  *:rounded *:px-3 max-w-md mx-auto shadow-2xl shadow-slate-700 max-h-screen  ">
      <h1 className="text-2xl font-bold mb-4 text-white text-center">
        Todo List
      </h1>

      <form onSubmit={handleAddNewtodo} className="bg-gray-900 py-4 ">
        <input
          className="py-2 text-slate-300 px-2 bg-slate-950 w-full outline outline-slate-400/80 rounded"
          type="text"
          name="todo"
          id="todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <div className="*:text-white !px-0">
        <select
          value={filter}
          name="filter"
          id="filter"
          className="*:bg-gray-900 bg-gray-900 px-3 py-1 rounded w-full active:outline-0 focus:outline-0"
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      {filteredTodos.length ? (
        <ul className="bg-gray-900 py-6 space-y-2.5 *:py-1.5 *:px-4   *:bg-slate-950 max-h-96 overflow-y-auto">
          {filteredTodos.map((todo, index) => (
            <li
              key={index}
              className={`flex transition-all duration-500  items-center justify-between ${
                todo.completed && "!bg-red-950/30"
              } `}
            >
              <input
                type="checkbox"
                className="mr-2"
                checked={todo.completed}
                onChange={() => handleItemChecked(todo.text)}
              />
              <button
                onClick={() => handleItemDelete(todo.text)}
                className="text-xs  bg-red-900 px-4 py-0.5 rounded hover:bg-red-700/80"
              >
                🗑️
              </button>
              <span
                className={`text-lg ${
                  todo.completed
                    ? " transition-all duration-500 ease-in-out text-gray-400 line-through"
                    : "text-white"
                }`}
              >
                {todo.text}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex items-center justify-center text-white/50">
          No items found
        </div>
      )}
    </div>
  );
};

export default TodoList;
