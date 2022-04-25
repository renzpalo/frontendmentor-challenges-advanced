import './Column.scss';

const Column = (props) => {
    return (
        <div className="column">
            {props.children}
        </div>
    );
};

export default Column;