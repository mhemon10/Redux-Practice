import React, { useState } from "react";

const Reducer = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-50">
      <div className="bg-white border border-amber-400 rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-emerald-700 mb-6">
          Count: <span className="text-amber-600">{count}</span>
        </h1>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold transition">
            Decrease
          </button>

          <button
            onClick={() => setCount(0)}
            className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 rounded-lg font-semibold transition">
            Reset
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg font-semibold transition">
            Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reducer;
