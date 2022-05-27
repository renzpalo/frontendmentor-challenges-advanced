import ProjectItemControl from "./ProjectItemControl";

const ProjectItem = (props) => {
  const handleProjectItemRadioChange = (e) => {
    console.log('Radio Changed', e.target);
  };

  return (
    <div 
      id={`project-item__${props.id}`}
      className={
          `project-item 
          ${props.isSelected ? 'selected' : ''} 
          ${props.project.quantity <= 0 && props.project.pledgeAmount > 0 ? 'disabled' : ''}`
      }
      onClick={
        props.project.quantity <= 0 && 
        props.project.pledgeAmount > 0 ? 
        null : props.onClick
      }
    >
      <div className="project-item__title">
        <div className="radio-group">
          <input 
            type="radio" 
            name="project-radio" 
            className="input-radio" 
            checked={props.isSelected} 
            onChange={handleProjectItemRadioChange}
          />
          <div className="text-group">
            <label htmlFor="project-radio">{props.project.title}</label>
            {props.project.pledgeAmount > 0 && 
              <small>
                Pledge ${props.project.pledgeAmount} or more
              </small>
            }
          </div>
        </div>
      </div>
      <p className="project-item__description">{props.project.description}</p>
      {props.project.pledgeAmount > 0 && 
        <p className="project-item__quantity"><b>{props.project.quantity}</b>left</p>
      }
      {props.project.pledgeAmount > 0 && props.isSelected &&
        <ProjectItemControl pledgeAmount={props.project.pledgeAmount} />
      }
    </div>
  );
};

export default ProjectItem;