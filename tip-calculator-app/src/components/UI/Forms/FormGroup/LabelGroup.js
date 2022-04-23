import './LabelGroup.scss';

const LabelGroup = (props) => {
    return(
        <div className="label-group">
            <label htmlFor="">{props.title}</label>
            <p className="error-message">Can't be zero</p>
        </div>
    );
};

export default LabelGroup;