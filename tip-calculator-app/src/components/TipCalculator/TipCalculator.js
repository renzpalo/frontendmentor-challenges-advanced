import './TipCalculator.scss';
import TipCalculatorForm from './TipCalculatorForm/TipCalculatorForm';

import TipCalculatorPanel from './TipCalculatorPanel';
import TipCalculatorResults from './TipCalculatorResult/TipCalculatorResult';

const TipCalculator = () => {

    let inputBillValue = 0;
    let inputNumOfPeople = 0;

    const getInputBillValue = (inputValue) => {
        inputBillValue = inputValue;

        console.log('TipCalculator getInputBillValue: ', inputBillValue);

        handleInputValueUpdate();
    };

    const getInputNumOfPeopleValue = (inputValue) => {
        inputNumOfPeople = inputValue;

        console.log('TipCalculator getInputNumOfPeopleValue: ', inputNumOfPeople);

        handleInputValueUpdate();
    };

    const handleInputValueUpdate = () => {
        console.log('handleInputValueUpdate');
    };

    return (
        <div className="tip-calculator-app">
            <TipCalculatorPanel>
                <TipCalculatorForm 
                    getInputBillValue={getInputBillValue} 
                    getInputNumOfPeopleValue={getInputNumOfPeopleValue}
                    />
                <TipCalculatorResults 
                    getInputBillValue={inputBillValue} 
                    getInputNumOfPeopleValue={inputNumOfPeople} 
                    handleInputValueUpdate={handleInputValueUpdate}
                    />
            </TipCalculatorPanel>
        </div>
    );
};

export default TipCalculator;