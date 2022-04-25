import React, { useState } from 'react';

import './TipCalculatorForm.scss';

import FormGroup from '../../UI/FormGroup/FormGroup';
import LabelGroup from '../../UI/FormGroup/LabelGroup';
import InputGroup from '../../UI/FormGroup/InputGroup';
import RadioGroup from '../../UI/FormGroup/RadioGroup';

const TipCalculatorForm = (props) => {

    const [inputBill, setInputBill] = useState(0);

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

    const handleInputBillChange = (event) => {

        props.getInputBillValue(event.target.value);

        console.log('Form: handleInputBillChange: ', inputBill);
    };

    const handleInputNumOfPeople = (event) => {
        props.getInputNumOfPeopleValue(event.target.value);

        console.log('Form: handleInputBillChange: ', inputBill);
    };

    return (
        <form className="tip-calculator-form" id="tip-calculator-form">
            <FormGroup>
                <LabelGroup labelName={inputs.inputBill} />
                <InputGroup iconImage={inputs.inputBill.icon}>
                    <input
                        onChange={handleInputBillChange}
                        type="number" 
                        name="" 
                        id="" 
                        />
                </InputGroup>
            </FormGroup>
            <FormGroup>
                <RadioGroup>
                    <input 
                        type="radio" 
                        name={inputs.inputTipPercentage.label} 
                        id="" 
                        data-content="5%" />
                    <label htmlFor={inputs.inputTipPercentage.label}>5%</label>

                    <input 
                        type="radio" 
                        name={inputs.inputTipPercentage.label} 
                        id=""
                        data-content="10%" />
                    <label htmlFor={inputs.inputTipPercentage.label}>5%</label>

                    <input 
                        type="radio" 
                        name={inputs.inputTipPercentage.label} 
                        id="" 
                        data-content="15%" />
                    <label htmlFor={inputs.inputTipPercentage.label}>5%</label>

                    <input 
                        type="radio" 
                        name={inputs.inputTipPercentage.label} 
                        id="" 
                        data-content="25%" />
                    <label htmlFor={inputs.inputTipPercentage.label}>5%</label>

                    <input 
                        type="radio" 
                        name={inputs.inputTipPercentage.label} 
                        id="" 
                        data-content="50%" />
                    <label htmlFor={inputs.inputTipPercentage.label}>5%</label>

                    <InputGroup>
                        <input 
                            type="number" 
                            name={inputs.inputTipPercentage.label} 
                            id="" 
                            placeholder="Custom" />
                        <label htmlFor={inputs.inputTipPercentage.label}>Custom</label>
                    </InputGroup>
                </RadioGroup>
            </FormGroup>
            <FormGroup>
                <LabelGroup labelName={inputs.inputNumOfPeople} />
                <InputGroup iconImage={inputs.inputNumOfPeople.icon}>
                    <input 
                        type="number" 
                        name="" 
                        id="" 
                        onChange={handleInputNumOfPeople}
                        />
                </InputGroup>
            </FormGroup>
        </form>
    );
};

export default TipCalculatorForm;