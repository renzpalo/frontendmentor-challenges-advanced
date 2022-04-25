import './Columns.scss';

const Columns = (props) => {
    return (
        <div className="columns">
            {props.children}
        </div>
    );
};

export default Columns;