import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const currentDate = new Date();

  currentDate.setDate(currentDate.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="Counter">
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      &nbsp;
      <span>{step}</span>

      <br />
      <br />

      <div className="controls">
        <button onClick={() => setCount((prev) => prev - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((prev) => prev + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `In ${count} days from today, it will be `
            : `In ${Math.abs(count)} days ago, it was `}
        </span>
        <span>{currentDate.toDateString()}</span>
      </p>

      { count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div> ) : null
      }
      
    </div>
  );
}
