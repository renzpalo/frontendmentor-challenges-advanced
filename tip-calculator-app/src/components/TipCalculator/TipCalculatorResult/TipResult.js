import './TipResult.scss';

const TipResult = (props) => {
    return (
        <div className="tip-result">
            <div className="tip-result-label">
                <p>{props.tipLabel}</p>
                <small>/ person</small>
            </div>
            <div className="tip-result-amount">
                <p>${props.tipAmount}</p>
            </div>
        </div>
    );
};

export default TipResult;