import React, { useState } from 'react';

import './TipCalculatorForm.scss';

const TipCalculatorForm = (props) => {
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form 
            className="tip-calculator-form" 
            id="tip-calculator-form" 
            onSubmit={handleFormSubmit}>
            {props.children}
        </form>
    );
};

export default TipCalculatorForm;