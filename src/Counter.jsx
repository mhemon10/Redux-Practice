import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement,incrementByAmount } from './Redux/CounterSlice';
const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(decrement())}>decrement</button>
            <button onClick={()=> dispatch(incrementByAmount(2))}>increment Multiply by 2</button>

        </div>
    );
};

export default Counter;