"use client";

import { useState } from "react";

export default function Counter({ users}) {
    const [count, setCount] = useState(0);
    console.log(users);
    
    return (
        <div>
            <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
            <p>Count: {count} {users.length}</p>
            <button onClick={() => setCount((count) => count + 1)}>Increment</button>
            <h1>Counter</h1>
        </div>
    );
}