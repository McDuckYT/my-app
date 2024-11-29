import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {

  const [number, setNumber] = useState(0)



  return (
    <div>
      <h1>Это наш кликер!</h1>
    </div>
  );
}

export default App;