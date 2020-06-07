import React, { useEffect, useState} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("0");
  const [secondValue, setSecondValue] = useState("0");
  const [symbol, setSymbol] = useState("");

  const symbolChange = (sym) => (
    (e) => {
      e.preventDefault();
      setSymbol(sym);
    }
  )
  const updateValue = (num) => (
    (e) => {
      e.preventDefault(); 
      if (symbol === "") {
        if (value === "0") {
          setValue(num);
        } else {
          setValue(value + num);
        }
      } else {
        if (secondValue === "0") {
          setSecondValue(num);
        } else {
          setSecondValue(secondValue + num);
        }
      }
    }
  )
  const result = () => {
    let result;
    switch(symbol) {
      case "+":
        result = parseInt(value) + parseInt(secondValue);
        break;
      case "-":
        result = parseInt(value) - parseInt(secondValue);
        break;
      case "*":
        result = parseInt(value) * parseInt(secondValue);
        break;
      case "/":
        result = parseInt(value) / parseInt(secondValue);
        break;
      default: 
        result = parseInt(value);
    }
    setSymbol("");
    setValue(result.toString());
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="input" id="input">{ symbol === "" ? value : secondValue}</div>
        <div className="buttons">
          <div className="operators">
            <div onClick={symbolChange("+")}>+</div>
            <div onClick={symbolChange("-")}>-</div>
            <div onClick={symbolChange("*")}>&times;</div>
            <div onClick={symbolChange("/")}>&divide;</div>
          </div>
          <div className="leftPanel">
            <div className="numbers">
              <div onClick={updateValue("7")}>7</div>
              <div onClick={updateValue("8")}>8</div>
              <div onClick={updateValue("9")}>9</div>
            </div>
            <div className="numbers">
              <div onClick={updateValue("4")}>4</div>
              <div onClick={updateValue("5")}>5</div>
              <div onClick={updateValue("6")}>6</div>
            </div>
            <div className="numbers">
              <div onClick={updateValue("1")}>1</div>
              <div onClick={updateValue("2")}>2</div>
              <div onClick={updateValue("3")}>3</div>
            </div>
            <div className="numbers">
              <div onClick={updateValue("0")}>0</div>
              <div onClick={updateValue(".")}>.</div>
              <div id="clear">C</div>
            </div>
          </div>
          <div className="equal" id="result" onClick={result}>=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
