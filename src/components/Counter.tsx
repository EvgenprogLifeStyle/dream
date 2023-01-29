import React, {useState} from 'react';
import './Counter.scss'
export const Counter = () => {

    const [val, setVal] = useState(0)


    const inc = () => {
        setVal(val + 1)
        console.log(val)
    }
    return (
        <div>
            <h1>{val}</h1>
            <button onClick={inc}>increment</button>
        </div>
    );
};
