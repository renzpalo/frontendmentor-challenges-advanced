import './InputGroup.scss';

const InputGroup = (props) => {

    const hasIconImage = props.iconImage ? 'block' : 'none';

    return (
        <div className="input-group">
            <img 
                src={'images/' + props.iconImage} 
                alt="Icon" className="input-icon" 
                style={ {display: hasIconImage} }
                />
            {props.children}
        </div>
    );
};

export default InputGroup;