import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  const increment = () => {
    if (count >= 100) return;
    setCount((value) => value + 1);
  };
  const decrement = () => {
    if (count <= 0) return;
    setCount((value) => value - 1);
  };

  const reset = () => {
    setCount(0);
    setValue(0);
  };

  const updateCounterByValue = (value: number) => {
    if (!value) return;
    setCount((prevValue) => prevValue + value);
  };

  return (
    <div className="h-screen flex  *:mt-10">
      <div className="py-4 min-w-md mx-auto bg-white h-60 flex items-center flex-col justify-between  rounded shadow-sm shadow-amber-700">
        <p className="text-2xl">Count: {count}</p>

        <div className="flex items-center flex-col gap-2">
          <div className="flex items-center gap-1">
            <input
              className="border outline-0 py-1.5 rounded px-2"
              type="number"
              onChange={(e) => setValue(+e.target.value)}
              value={value}
            />
            <button
              onClick={reset}
              className="py-1 text-2xl rounded outline-0 px-10 bg-red-700 text-white disabled:bg-gray-800/50"
            >
              Reset
            </button>
          </div>
          <div className="space-x-4">
            <button
              disabled={count <= 0}
              onClick={decrement}
              className="py-1 text-2xl rounded outline-0 px-10 bg-gray-800 text-white disabled:cursor-not-allowed disabled:bg-gray-800/50"
            >
              -
            </button>
            <button
              disabled={count + value > 100}
              onClick={() => updateCounterByValue(value)}
              className="py-1 text-2xl rounded outline-0 px-10 bg-gray-800 text-white disabled:cursor-not-allowed disabled:bg-gray-800/50"
            >
              {value}
            </button>
            <button
              onClick={increment}
              className="py-1 text-2xl bg-green-800 px-10 rounded outline-0 text-white"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
