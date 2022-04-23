import './RadioGroup.scss';

const RadioGroup = (props) => {
    return (
        <div className="radio-group">
            <input 
                type="radio" 
                name={'percent-' + props.name} 
                id={'percent-' + props.name} 
                value={props.name} 
                data-content={props.name + '%'}
                />
            <label htmlFor={'percent-' + props.name}>{props.name}</label>
        </div>
    );
};

export default RadioGroup;