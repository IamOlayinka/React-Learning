import { useState } from 'react';


const Counter = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('black');

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);

        if (newCount % 2 === 0) {
            setColor('green');
        } else {
            setColor('red');
        }
    }

    const handleDecrement = () => {
        const newCount = count - 1;
        setCount(newCount);

        if (newCount % 2 === 0) {
            setColor('green');
        } else {
            setColor('red');
        }
    }

    return (
        <div>
            <h1 style={{ color: color }}>Counter: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}


export default Counter;