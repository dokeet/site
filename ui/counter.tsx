import { useState } from 'react';
export const Counter = () => {
    const [counter, setCounter] = useState(0);
    return <button className="bg-red-100 px-4" onClick={() => setCounter(counter + 1)}>{counter}</button>
}