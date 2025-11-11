import React, { useReducer } from 'react';

const UseCounter = () => {

const [count, dispatch] = useReducer(reducer,0)


    return (
      <div className="flex justify-center items-center min-h-screen bg-amber-50">
        <div className="bg-white border border-amber-400 rounded-2xl shadow-lg p-8 text-center">
          
            <h1> Count:{count}</h1>
            <div>
              <button>increment</button>
              <button>reset</button>
              <button>decrement</button>
            </div>
          
        </div>
      </div>
    );
};

export default UseCounter;