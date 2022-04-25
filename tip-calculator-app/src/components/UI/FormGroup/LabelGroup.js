import './LabelGroup.scss';

const LabelGroup = (props) => {
    return (
        <div className="label-group">
            <label htmlFor={props.labelName.name}>{props.labelName.label}</label>
            <p className="error-message">Can't be zero</p>
        </div>
    );
};

export default LabelGroup;