import React, { useState, useEffect } from 'react';

import './CalculatorPanel.scss';

import CalculatorForm from './CalculatorForm/CalculatorForm';
import CalculatorResults from './CalculatorResults/CalculatorResults';

const CalculatorPanel = () => {

    let userInput = {
        inputBill: 0,
        inputTipPercentage: 0.05,
        inputNumOfPeople: 0
    }

    const [userInputs, setUserInputs] = useState(userInput);

    const handleUserInput = (inputData) => {
        userInput = inputData;

        setUserInputs(userInput);

        console.log('CalculatorPanel: ', inputData);
        console.log('CalculatorPanel useState: ', userInputs);
    };

    // useEffect(() => {
    //     setUserInputs(userInput);
    // });

    return(
        <div className="calculator-panel">
            <CalculatorForm handleUserInput={handleUserInput} />
            <CalculatorResults userInput={userInput} userInputs={userInputs} />
        </div>
    );
};

export default CalculatorPanel;