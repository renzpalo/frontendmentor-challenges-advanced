const Panel = (props) => {
  const classNames = 'panel ' + props.className; 
  
  return (
    <div className={classNames}>
      {props.children}
    </div>
  );
};

export default Panel;