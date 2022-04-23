import React, { useState, useEffect } from 'react';

import './CalculatorForm.scss';

import FormGroup from '../../UI/Forms/FormGroup/FormGroup';
import LabelGroup from '../../UI/Forms/FormGroup/LabelGroup';
import InputGroup from '../../UI/Forms/FormGroup/InputGroup';
import TipPercentageRadios from './TipPercentageRadios';

const CalculatorForm = (props) => {

    let userInput = {
        inputBill: 0,
        inputTipPercentage: 0.05,
        inputNumOfPeople: 0
    }

    const handleSaveBillInput = (inputData) => {
        
        userInput.inputBill = inputData;

        props.handleUserInput(userInput);

        console.log('handleSaveBillInput: ', userInput);
    };

    const handleSaveNumPeopleInput = (inputData) => {
        userInput.inputNumOfPeople = inputData;

        props.handleUserInput(userInput);

        console.log('handleSaveBillInput: ', userInput);
    };

    return(
        <form id="calculator-form" className="calculator-panel-column">
            <FormGroup>
                <LabelGroup 
                    title="Bill" 
                />
                <InputGroup 
                    imgsrc="icon-dollar.svg" 
                    saveInputData={handleSaveBillInput} 
                    placeholder="0.00"
                />
            </FormGroup>
            <FormGroup>
                <LabelGroup
                    title="Select Tip %"
                />
                <TipPercentageRadios />
            </FormGroup>
            <FormGroup>
                <LabelGroup 
                    title="Number of People"
                />
                <InputGroup 
                    imgsrc="icon-person.svg" 
                    saveInputData={handleSaveNumPeopleInput} 
                    placeholder="0"
                />
            </FormGroup>
        </form>
    );
}

export default CalculatorForm;