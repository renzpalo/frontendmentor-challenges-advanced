import './Columns.scss';

const Container = (props) => {
    return (
        <div className="columns">
            {props.children}
        </div>
    );
};

export default Container;