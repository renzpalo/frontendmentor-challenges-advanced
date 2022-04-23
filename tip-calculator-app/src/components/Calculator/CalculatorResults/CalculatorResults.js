import React, { useState, useEffect } from 'react';

import './CalculatorResults.scss';
import TipResult from './TipResult';

const CalculatorResults = (props) => {

    let tipAmount = 0, totalAmount = 0;

    tipAmount = props.userInputs.inputBill * props.userInputs.inputTipPercentage;
    totalAmount = props.userInputs.inputBill + tipAmount;

    const handleResetResults = () => {
        console.log('Reset');
    };

    console.log('CalculatorResults: ', props.userInput);
    console.log('CalculatorResults useState: ', props.userInputs);
    
    return (
        <div className="tip-results">
            <TipResult 
                label="Tip Amount" 
                amount={tipAmount.toFixed(2)} 
                />
            <TipResult 
                label="Total" 
                amount={totalAmount.toFixed(2)} 
                onChange={handleResetResults}
                />

            <button 
                type="submit" 
                className="button button-primary"
                onClick={handleResetResults}
            >Reset</button>
        </div>
    );
};

export default CalculatorResults;









