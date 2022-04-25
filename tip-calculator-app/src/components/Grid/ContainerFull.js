import './ContainerFull.scss';

const ContainerFull = (props) => {
    return (
        <div className="container-full">
            {props.children}
        </div>
    );
};

export default ContainerFull;