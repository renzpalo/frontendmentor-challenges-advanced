import './LabelGroup.scss';

const LabelGroup = (props) => {
    const hasError = props.hasError ? 'block' : 'none';

    return (
        <div className="label-group">
            <label htmlFor={props.labelName.name}>{props.labelName.label}</label>
            <p className="error-message" style={{ display: hasError }}>Can't be zero</p>
        </div>
    );
};

export default LabelGroup;