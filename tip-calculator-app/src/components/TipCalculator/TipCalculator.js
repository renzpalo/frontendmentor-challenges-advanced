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

    const [inputBill, setInputBill] = useState(0);
    const [inputTipPercentage, setInputTipPercentage] = useState(0.05);
    const [inputNumOfPeople, setInputNumOfPeople] = useState(1);

    const [tipAmount, setTipAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const handleInputBillChange = (event) => {
        let eventValue = 0;

        if(parseFloat(event.target.value) > 0) {
            eventValue = event.target.value;
        } else {
            eventValue = 0;
        }

        const calculatedTipAmount = ((parseFloat(eventValue) * parseFloat(inputTipPercentage)) / parseFloat(inputNumOfPeople)).toFixed(2);
        const calculatedTotalAmount = ((parseFloat(eventValue) + parseFloat(calculatedTipAmount)) / parseFloat(inputNumOfPeople)).toFixed(2);

        setInputBill(parseFloat(eventValue));

        setTipAmount(calculatedTipAmount);
        setTotalAmount(calculatedTotalAmount);

        console.log('inputBill: ', inputBill);
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
        let eventValue = 0;

        if(parseFloat(event.target.value) > 0) {
            eventValue = event.target.value;
        } else {
            eventValue = 0;
        }

        const calculatedTipAmount = ((parseFloat(inputBill) * parseFloat(inputTipPercentage)) / parseFloat(eventValue)).toFixed(2);
        const calculatedTotalAmount = ((parseFloat(inputBill) + parseFloat(calculatedTipAmount)) / parseFloat(eventValue)).toFixed(2);

        setInputNumOfPeople(parseFloat(event.target.value));

        setTipAmount(calculatedTipAmount);
        setTotalAmount(calculatedTotalAmount);

        console.log('inputNumOfPeople: ', inputNumOfPeople);
    };

    const handleInputOnFocus = (event) => {
        if(event.target.value == 0) {
            event.target.value = '';
        }
    };

    const handleResetButton = () => {
        setInputBill(0);
        setInputTipPercentage(0);
        setInputNumOfPeople(0);
        setTipAmount(0);
        setTotalAmount(0);
    };
    
    return (
        <div className="tip-calculator-app">
            <TipCalculatorPanel>
                <TipCalculatorForm>
                    <FormGroup>
                        <LabelGroup labelName={inputs.inputBill} />
                        <InputGroup iconImage={inputs.inputBill.icon}>
                            <input
                                onChange={handleInputBillChange} 
                                onFocus={handleInputOnFocus}
                                type="number" 
                                min={0} 
                                value={inputBill} />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
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
                        <LabelGroup labelName={inputs.inputNumOfPeople} />
                        <InputGroup iconImage={inputs.inputNumOfPeople.icon}>
                            <input 
                                type="number" 
                                onChange={handleInputNumOfPeople} 
                                onFocus={handleInputOnFocus} 
                                value={inputNumOfPeople}
                                />
                        </InputGroup>
                    </FormGroup>
                </TipCalculatorForm>
                <TipCalculatorResults>
                    <TipResult 
                        tipLabel="Tip Amount"
                        tipAmount={tipAmount}
                         />
                    <TipResult 
                        tipLabel="Total"
                        tipAmount={totalAmount} 
                         />
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