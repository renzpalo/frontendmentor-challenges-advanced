import './Column.scss';

const Container = (props) => {
    return (
        <div className="column">
            {props.children}
        </div>
    );
};

export default Container;