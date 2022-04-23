import React, { useState, useEffect } from 'react';

import './InputGroup.scss';

const InputGroup = (props) => {

    let hasInputIcon = props.imgsrc ? 'block' : 'none';

    let inputValue = 0;

    const handleInput = (e) => {
        inputValue = parseFloat(e.target.value);

        props.saveInputData(inputValue);

        console.log('InputGroup: ', inputValue);
        console.log('--------------------------------');
    };

    return(
        <div className="input-group">
            <img 
                src={'images/' + props.imgsrc} 
                alt={props.imgsrc} 
                className="input-icon" 
                style={ {display: hasInputIcon} } 
            />
            <input 
                type="number" 
                onChange={handleInput} 
                placeholder={props.placeholder}/>
        </div>
    );
};

export default InputGroup;