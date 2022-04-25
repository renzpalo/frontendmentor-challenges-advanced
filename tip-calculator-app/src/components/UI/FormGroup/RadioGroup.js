import './RadioGroup.scss';

const RadioGroup = (props) => {
    return (
        <div className="radio-group">
            {props.children}
        </div>
    );
};

export default RadioGroup;