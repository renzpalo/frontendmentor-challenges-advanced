import './Container.scss';

const Container = (props) => {
    const propsClasses = props.className;

    return (
        <div className={propsClasses}>
            {props.children}
        </div>
    );
};

export default Container;