import React, { useReducer } from "react";

const UseCounter = () => {

  const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "INCREMENT") {
     
      return state + 1;
    }
    if (action.type === "DECREMENT") {
      return state - 1;
    }
    if (action.type === "RESET") return 0; 
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-50">
      <div className="bg-white border border-amber-400 rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-emerald-700 mb-6">
          Count: {count}
        </h1>
        <div className="flex gap-4 justify-center">
          <button
            // Dispatches the correct type: "INCREMENT"
            onClick={() => dispatch({ type: "INCREMENT" })}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg font-semibold transition">
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: "RESET" })}
            className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 rounded-lg font-semibold transition">
            Reset
          </button>
          <button
            onClick={() => dispatch({ type: "DECREMENT" })}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold transition">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseCounter;
