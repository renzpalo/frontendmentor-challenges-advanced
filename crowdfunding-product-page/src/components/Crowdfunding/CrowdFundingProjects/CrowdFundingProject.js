import Panel from "../../UI/Panel";

const CrowdFundingProject = (props) => {
  const handleOpenProjectModal = () => {
    props.onOpenProjectModal(true);
  };

  return (
    <Panel 
      className={`
        crowd-funding__project 
        ${props.project.quantity <= 0 ? 'disabled' : ''} 
      `}
    >
      <div className="project-title">
        <h3>{props.project.title}</h3>
        <p>Pledge ${props.project.pledgeAmount} or more</p>
      </div>
      <p className="project-description">{props.project.description}</p>
      <div className="project-controls">
        <p><b>{props.project.quantity}</b> left</p>
        <button 
          className="button button-primary"
          onClick={handleOpenProjectModal} 
          disabled={props.project.quantity <= 0 ? true : false}
        >
          {props.project.quantity > 0 ? 'Select Reward' : 'Out of Stock'}
          </button>
      </div>
    </Panel>
  );
};

export default CrowdFundingProject;