import React, { useState } from "react";
import './Tempraturecontroller.scss'

const Tempraturecontroller = () => {
  const [count, setCount] = useState(15);
  const [bgColor, setBgColor] = useState("#2b5870");

  // Function to handle increment and background change
  const handleIncrement = () => {
    const newCount = count + 1;

    setCount(newCount);
   
    if (newCount <= 0) {
      setBgColor("##92eefb");
    } 
    else if (newCount <= 20 ) {
      setBgColor("#2b5870");
    } 
    else if (newCount < 45) {
      setBgColor("green");
    } 
    else {
      setBgColor("red");
    }
  };

  // Function to handle decrement and background change
  const handleDecrement = () => {
    const newCount = count - 1;

    setCount(newCount);

    if (newCount <= -0 ) {
      setBgColor("#92eefb");
    } 
    else if (newCount <= 20 ) {
      setBgColor("#2b5870");
    } 
    else if (newCount <= 45) {
      setBgColor("green");
    } 
    else {
      setBgColor("red");
    }
  };

  return (
    <div className="tempcolor_main">
      <div className="tempcolor" style={{
        backgroundColor: bgColor
      }}>
        <h2>
        {count}<span> <sup>o</sup> C</span>
        </h2>
      <div className="countdiv">
        <button onClick={handleDecrement} >
          -
        </button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
    </div>
  );
};

export default Tempraturecontroller;
