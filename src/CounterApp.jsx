import { hover } from "@testing-library/user-event/dist/hover";
import "./App.css";
import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(' \aleph_0 ');

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => setCount((prev) => prev + 1)}

        className="buttonCount"
      >
        Increment
      </button>

      <button
        onClick={() => setCount((prev) => prev - 1)}
        style={{
          padding: "10px 20px",
          margin: "5px",
          backgroundColor: "red",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: 'pointer'
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => setCount(0)}
        style={{
          padding: "10px 20px",
          margin: "5px",
          backgroundColor: "blue",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: 'pointer'
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterApp;
