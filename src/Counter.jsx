import { useState } from "react";
export default function Counter() {
const [count, setCount] = useState(0);

const handleAdd = () =>{
const newCount = count + 1;
setCount (newCount);
}

    const CounterStyle = {
        border: '2px solid green',
        marginBottom: '20px',
        padding: '20px',
        borderRadius: '10px'
    }

    return(
        <div style={CounterStyle}>
            <h2>count: {count}</h2>
            <button onClick={handleAdd}>add</button>
        </div>
    )
}