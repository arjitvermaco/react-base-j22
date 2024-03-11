import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";

const calculatorUI = [
  [
    { label: "AC", type: "function" },
    { label: "+/-", type: "function" },
    { label: "%", type: "operator" },
    { label: "÷", type: "operator" },
  ],
  [
    { label: "7", type: "number" },
    { label: "8", type: "number" },
    { label: "9", type: "number" },
    { label: "×", type: "operator" },
  ],
  [
    { label: "4", type: "number" },
    { label: "5", type: "number" },
    { label: "6", type: "number" },
    { label: "-", type: "operator" },
  ],
  [
    { label: "1", type: "number" },
    { label: "2", type: "number" },
    { label: "3", type: "number" },
    { label: "+", type: "operator" },
  ],
  [
    { label: "0", type: "number", size: "double" }, // 'size' could be used to style the button differently if needed
    { label: ".", type: "decimal" },
    { label: "=", type: "operator" },
  ],
];

export default function Calculator() {
  const [display, setDisplay] = useState(0);
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [reset, setReset] = useState(false);

  const handleClick = (label, type) => {
    console.log(label, type);

    if (type === "number") {
      if (display === 0) {
        setDisplay(label);
      } else {
        setDisplay(display + label);
      }
    } else if (type === "operator") {
      if (label === "=") {
         const result = calculate(prevValue,parseInt(display),operator);
         setDisplay(result);
         setPrevValue(result);
         setOperator(null)
      } else {
        //Add Login to handle multiple evaluations in single instance
        // eg . 20 + 30 + 40 *2 
        setPrevValue(parseInt(display));
        setOperator(label);
        setDisplay(0)
      }
    }else if(type === 'function'){
      handleFunction(label)
    }
  };

  const calculate = (a, b, operator) => {
    switch (operator) {
      case "+":
        setPrevValue(a+b)
        return a + b;
      case "-":
        return a - b;
      case "×":
        return a * b;
      case "÷":
        return a / b;
      default:
        return 0;
    }
  };

  const handleFunction = (label)=>{
    switch(label){
      case 'AC':
        setDisplay(0);
        setPrevValue(null)
        setOperator(null)
        break;
      case '+/-':
        setDisplay(parseFloat(display)* -1);
        break;
      case '%':
        setDisplay(parseFloat(display) / 100);
        break;
      default:
        break;
    }
  }

  return (
    <div className="max-w-xs mx-auto shadow-lg  h-96 bg-white">
      <Display display={display} />
      <div className="grid grid-cols-4 gap-1">
        {calculatorUI.flat().map((button, index) => {
          return <Button key={index} {...button} handleClick={handleClick} />;
        })}
      </div>
    </div>
  );
}
