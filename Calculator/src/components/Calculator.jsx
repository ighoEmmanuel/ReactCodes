import React, { useState } from 'react';
import style from "./Calculator.module.css";

const Calculator = () => {
    const [display, setDisplay] = useState("");

    const buttonNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const buttonSigns = ['+', '-', '*', '/'];

    const press = (value) => {
        setDisplay(display + value);
    };

    const clear = () => {
        setDisplay("");
    };

    const calculate = () => {
        try {

            setDisplay(Function('"use strict";return (' + display + ')')().toString());
        } catch {
            setDisplay("Error");
        }
    };

    return (
        <div className={style.calculator}>
            <input type="text" value={display} className={style.display} disabled />
            <div className={style.buttons}>
                {buttonNumbers.map((num) => (
                    <button key={num} onClick={() => press(num)}>{num}</button>
                ))}
                {buttonSigns.map((sign) => (
                    <button key={sign} onClick={() => press(sign)}>{sign}</button>
                ))}
                <button onClick={calculate}>=</button>
                <button onClick={clear}>Clear</button>
            </div>
        </div>
    );
};

export default Calculator;
