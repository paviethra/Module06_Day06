import React, { useState } from "react";
import './App.css';

export default function App() {
  const [height, setHeight] = useState(0);
  const [mass, setMass] = useState(0);
  const [bmi, setBmi] = useState(0);

  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = (+mass / (+height) ** 2).toFixed(2);
    setBmi(bmi);

    if(bmi<18.5){

    }
  };

  return (
    <div className="App">
      <h2>BMI calculator</h2>
      <div className="container">
        <form onSubmit={calculate}>
          <div>
            <label>Height (m)  : </label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>

          <div>
            <label>Weight(kg) : </label>
            <input value={mass} onChange={(e) => setMass(e.target.value)} />
          </div>

          <button type="submit">Calculate</button>
        </form>
        <h4>BMI:  {bmi}</h4>
      </div>
      
    </div>
  );
}