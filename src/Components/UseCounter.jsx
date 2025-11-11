import React, { useReducer } from 'react';

const UseCounter = () => {


    const reducer = (state, action) => {
        console.log(state, action);
        if (action.type === "INCRIMENT") {
            return state + 1;

        }
        if (action.type === "DECREMENT") {
            return state - 1;
        }
    };

const [count, dispatch] = useReducer(reducer,0)


    return (
      <div className="flex justify-center items-center min-h-screen bg-amber-50">
        <div className="bg-white border border-amber-400 rounded-2xl shadow-lg p-8 text-center">
          <h1 className="text-3xl font-bold text-emerald-700 mb-6">
            Count:{count}
          </h1>
          <div className="flex gap-4 justify-center">
            <button onClick={()=> dispatch({type:"INCREMENT"})}>Increment</button>
            <button>reset</button>
            <button>decrement</button>
          </div>
        </div>
      </div>
    );
};

export default UseCounter;