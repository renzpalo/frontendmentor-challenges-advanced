import React, { useState } from 'react';

import './TipCalculatorResults.scss';

import TipResult from './TipResult';

const TipCalculatorResults = (props) => {

    const billValue = parseFloat(props.getInputBillValue);
    const numOfPeopleValue = parseFloat(props.getInputNumOfPeopleValue);

    const tipAmount = (billValue * 2) / numOfPeopleValue;
    const totalAmount = (numOfPeopleValue + tipAmount) / numOfPeopleValue;

    console.log('TipCalculatorResults: ', billValue);
    console.log('TipCalculatorResults: ', numOfPeopleValue);
    console.log('TipCalculatorResults: ', tipAmount);
    console.log('TipCalculatorResults: ', totalAmount);


    props.handleInputValueUpdate();

    return(
        <div className="tip-calculator-results">
            <TipResult 
                tipLabel="Tip Amount" 
                tipAmount={tipAmount}
                />
            <TipResult 
                tipLabel="Total" 
                tipAmount={totalAmount}
                />
            <button type="submit" className="button button-primary">Reset</button>
        </div>
    );
};

export default TipCalculatorResults;