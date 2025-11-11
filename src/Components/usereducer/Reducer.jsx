import React, { useState } from 'react';

const Reducer = () => {


const [count, setCount] = useState(0)


    return (
        <div className='p-4 h-lvh flex flex-col justify-center'>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-2)}>Decrement</button>
        </div>
    );
};

export default Reducer;