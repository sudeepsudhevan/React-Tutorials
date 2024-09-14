import { useState } from "react";


export default function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

function Counter() {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const currentDate = new Date();

    currentDate.setDate(currentDate.getDate() + count);

    // console.log(currentDate);


    return (
      <div className="Counter">

        <div className="controls">
          <button onClick={()=>setStep((prev)=>(prev-1))}>-</button>
          <p> Step: {step} </p>
          <button onClick={()=>setStep((prev)=>(prev+1))}>+</button>
        </div>

        <div className="controls">
          <button onClick={()=>setCount((prev)=>(prev-step))}>-</button>
          <p> Count: {count} </p>
          <button onClick={()=>setCount((prev)=>(prev+step))}>+</button>
        </div>

        <p>
          <span>
            {
              count === 0
              ? "Today is "
              : count > 0
              ? `In ${count} days from today, it will be `
              : `In ${Math.abs(count)} days ago, it was `
            }
          </span>
          <span>{currentDate.toDateString()}</span> 
        </p>
      </div>
      
    )
}

