import './TipCalculatorResults.scss';

const TipCalculatorResults = (props) => {
    return(
        <div className="tip-calculator-results">
            {props.children}
        </div>
    );
};

export default TipCalculatorResults;