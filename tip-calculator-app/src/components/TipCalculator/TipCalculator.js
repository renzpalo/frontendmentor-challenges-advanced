import React, { useState ,useEffect } from 'react';

import './TipCalculator.scss';

import TipCalculatorForm from './TipCalculatorForm/TipCalculatorForm';
import TipCalculatorPanel from './TipCalculatorPanel';
import TipCalculatorResults from './TipCalculatorResult/TipCalculatorResults';
import TipResult from './TipCalculatorResult/TipResult';
import FormGroup from '../UI/FormGroup/FormGroup';
import LabelGroup from '../UI/FormGroup/LabelGroup';
import InputGroup from '../UI/FormGroup/InputGroup';
import RadioGroup from '../UI/FormGroup/RadioGroup';

const TipCalculator = () => {
    const inputs = {
        inputBill: {
            name: 'bill',
            label: 'Bill',
            icon: 'icon-dollar.svg'
        },
        inputTipPercentage: {
            name: 'tip-percentage',
            label: 'Select Tip %',
            icon: null
        },
        inputNumOfPeople: {
            name: 'num-of-people',
            label: 'Number of People',
            icon: 'icon-person.svg'
        },
    }

    const [inputBill, setInputBill] = useState();
    const [inputTipPercentage, setInputTipPercentage] = useState(0.05);
    const [inputNumOfPeople, setInputNumOfPeople] = useState();

    const [tipAmount, setTipAmount] = useState(parseFloat(0.00).toFixed(2));
    const [totalAmount, setTotalAmount] = useState(parseFloat(0.00).toFixed(2));

    const [inputBillError, setInputBillError] = useState(false);
    const [inputNumOfPeopleError, setInputNumOfPeopleError] = useState(false);

    const handleInputBillChange = (event) => {
        let eventValue = event.target.value;

        console.log(event.target);

        if(parseFloat(event.target.value) <= 0) {
            setInputBillError(true);
            event.target.classList.add('input-error');
        } else {
            setInputBillError(false);
            event.target.classList.remove('input-error');
        }

        const calculatedTipAmount = ((parseFloat(eventValue) * parseFloat(inputTipPercentage)) / parseFloat(inputNumOfPeople)).toFixed(2);
        const calculatedTotalAmount = ((parseFloat(eventValue) + parseFloat(calculatedTipAmount)) / parseFloat(inputNumOfPeople)).toFixed(2);

        setInputBill(parseFloat(eventValue));

        setTipAmount(calculatedTipAmount);
        setTotalAmount(calculatedTotalAmount);
    };

    const handleTipRadioButtonChange = (event) => {
        let eventValue = 0;

        if(parseFloat(event.target.value) > 0.50) {
            eventValue = (parseFloat(event.target.value) / 100).toFixed(2);
        } else {
            eventValue = event.target.value;
        }

        const calculatedTipAmount = ((parseFloat(inputBill) * parseFloat(eventValue)) / parseFloat(inputNumOfPeople)).toFixed(2);
        const calculatedTotalAmount = ((parseFloat(inputBill) + parseFloat(calculatedTipAmount)) / parseFloat(inputNumOfPeople)).toFixed(2);

        setTipAmount(calculatedTipAmount);
        setInputTipPercentage(parseFloat(eventValue));
        setTotalAmount(calculatedTotalAmount);
    };

    const handleInputNumOfPeople = (event) => {
        let eventValue = event.target.value;

        if(parseFloat(event.target.value) <= 0) {
            setInputNumOfPeopleError(true);
            event.target.classList.add('input-error');
        } else {
            setInputNumOfPeopleError(false);
            event.target.classList.remove('input-error');
        }

        const calculatedTipAmount = ((parseFloat(inputBill) * parseFloat(inputTipPercentage)) / parseFloat(eventValue)).toFixed(2);
        const calculatedTotalAmount = ((parseFloat(inputBill) + parseFloat(calculatedTipAmount)) / parseFloat(eventValue)).toFixed(2);

        setInputNumOfPeople(parseFloat(event.target.value));

        setTipAmount(calculatedTipAmount);
        setTotalAmount(calculatedTotalAmount);
    };

    const handleInputOnFocus = (event) => {
        if(event.target.value == 0) {
            event.target.value = '';
        }
    };

    const handleResetButton = () => {
        setInputBill();
        setInputTipPercentage(0.05);
        setInputNumOfPeople();
        setTipAmount(parseFloat(0.00).toFixed(2));
        setTotalAmount(parseFloat(0.00).toFixed(2));
    };
    
    return (
        <div className="tip-calculator-app">
            <TipCalculatorPanel>
                <TipCalculatorForm>
                    <FormGroup>
                        <LabelGroup labelName={inputs.inputBill} hasError={inputBillError} />
                        <InputGroup iconImage={inputs.inputBill.icon}>
                            <input
                                onChange={handleInputBillChange} 
                                onFocus={handleInputOnFocus}
                                type="number" 
                                min={0} 
                                value={inputBill} 
                                placeholder="0" 
                                />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <LabelGroup labelName={inputs.inputTipPercentage} />
                        <RadioGroup>
                            <input 
                                type="radio" 
                                name={inputs.inputTipPercentage.label} 
                                id="" 
                                data-content="5%" 
                                value={0.05} 
                                onChange={handleTipRadioButtonChange} 
                                />
                            <label htmlFor={inputs.inputTipPercentage.label}>5%</label>

                            <input 
                                type="radio" 
                                name={inputs.inputTipPercentage.label} 
                                id=""
                                data-content="10%" 
                                value={0.10} 
                                onChange={handleTipRadioButtonChange} />
                            <label htmlFor={inputs.inputTipPercentage.label}>5%</label>

                            <input 
                                type="radio" 
                                name={inputs.inputTipPercentage.label} 
                                id="" 
                                data-content="15%" 
                                value={0.15} 
                                onChange={handleTipRadioButtonChange} />
                            <label htmlFor={inputs.inputTipPercentage.label}>5%</label>

                            <input 
                                type="radio" 
                                name={inputs.inputTipPercentage.label} 
                                id="" 
                                data-content="25%" 
                                value={0.25} 
                                onChange={handleTipRadioButtonChange} />
                            <label htmlFor={inputs.inputTipPercentage.label}>5%</label>

                            <input 
                                type="radio" 
                                name={inputs.inputTipPercentage.label} 
                                id="" 
                                data-content="50%" 
                                value={0.50} 
                                onChange={handleTipRadioButtonChange} />
                            <label htmlFor={inputs.inputTipPercentage.label}>5%</label>

                            <InputGroup>
                                <input 
                                    type="number" 
                                    name={inputs.inputTipPercentage.label} 
                                    id="" 
                                    placeholder="Custom" 
                                    onChange={handleTipRadioButtonChange} />
                                <label htmlFor={inputs.inputTipPercentage.label}>Custom</label>
                            </InputGroup>
                        </RadioGroup>
                    </FormGroup>
                    <FormGroup>
                        <LabelGroup labelName={inputs.inputNumOfPeople} hasError={inputNumOfPeopleError} />
                        <InputGroup iconImage={inputs.inputNumOfPeople.icon}>
                            <input 
                                type="number" 
                                onChange={handleInputNumOfPeople} 
                                onFocus={handleInputOnFocus} 
                                value={inputNumOfPeople} 
                                placeholder="0"
                                />
                        </InputGroup>
                    </FormGroup>
                </TipCalculatorForm>
                <TipCalculatorResults>
                    <div className="tip-results">
                        <TipResult 
                            tipLabel="Tip Amount"
                            tipAmount={tipAmount}
                            />
                        <TipResult 
                            tipLabel="Total"
                            tipAmount={totalAmount} 
                            />
                    </div>
                    <button 
                        type="button" 
                        className="button button-primary" 
                        onClick={handleResetButton} >Reset</button>
                </TipCalculatorResults>
            </TipCalculatorPanel>
        </div>
    );
};

export default TipCalculator;