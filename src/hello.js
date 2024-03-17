import React, { useState,useEffect } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [inputClass, setInputClass] = useState("");
  const [result2Color, setResult2Color] = useState("");

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;
      const keyCode = event.keyCode || event.which || event.charCode;
      console.log(input);
     
      if (/[0-9.+\-*/=C]/.test(key) && keyCode !== 13) {
        console.log(key);
        handleButtonClick(key);
      } else if (keyCode === 13) {
        event.preventDefault(); // Prevent default behavior of Enter key
        handleButtonClick("=");
      }
       else if(key=== "c")
       {
        event.preventDefault();
        handleButtonClick("C");
       }
      else if (key === "Backspace") {
        event.preventDefault(); // Prevent browser navigation
        handleButtonClick("Backspace");
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
       document.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]);

  const handleButtonClick = (value) => {
    console.log("Handle function fired");
    if (value === "=") {
      try {
        const res = eval(input);
      setResult(res.toString());
      setInput(res.toString());
      setInputClass("valid");
      setResult2Color("red"); // Set color to orange if result is valid

        // alert("5",input);
      } catch (error) {
        // alert(input);
        setResult("Error");
        setInputClass("error");
        setResult2Color("red"); // Set color to red if there's an error
        
      }
    } else if (value === "C" || value==="c") {
      setInput("");
      setResult("");
    } else if (value === 'x^2') {
        setInput((prevInput) => prevInput + '**2');
      } else if (value === 'sqrt') { // New button for square root
        setInput((prevInput) => `Math.sqrt(${prevInput})`);
      }
     else if (value === "Backspace") {
        setInput((prevInput) => prevInput.slice(0, -1)); // Remove the last character
      }
    else if(value === "CapsLock"){
      
    }
    else {
      setInput((prevInput) => {
        return prevInput + value;
      });
    }
    console.log(input)
  };

  return (
    <div>
      <div>
        <input type="text" value={input} readOnly id="input" className={inputClass}/>
      </div>
      <div>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button id="equal" onClick={() => handleButtonClick("=")}>=</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("&")}>AND</button>
        <button onClick={() => handleButtonClick("|")}>OR</button>
        <button onClick={() => handleButtonClick("^")}>XOR</button>
        <button onClick={() => handleButtonClick("%")}>MOD</button>
        
      </div>
      <div>
      <button onClick={() => handleButtonClick("<<")}>{"<<"}</button>
      <button onClick={() => handleButtonClick(">>")}>{">>"}</button>
      <button onClick={() => handleButtonClick("x^2")}>{"x²"}</button>
      <button onClick={() => handleButtonClick("sqrt")}>{"√x"}</button>
      
        <button id="C" onClick={() => handleButtonClick("C" || "c")}>C</button>
      </div>
      {/* <div >
        <p id="result2" style={{ color: result2Color }}>Result:   {result}</p>
      </div> */}
    </div>
  );
};

export default Calculator;
