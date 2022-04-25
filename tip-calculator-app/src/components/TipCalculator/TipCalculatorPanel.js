import './TipCalculatorPanel.scss';

const TipCalculatorPanel = (props) => {
    return (
        <div className="tip-calculator-panel">
            {props.children}
        </div>
    );
};

export default TipCalculatorPanel;