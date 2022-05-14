import ProjectItemControl from "./ProjectItemControl";

const ProjectItem = (props) => {
  return (
    <div className="project-item">
      <div className="project-item__title">
        <div className="radio-group">
          <input type="radio" name="project-radio" className="input-radio" />
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
      {props.project.pledgeAmount > 0 && 
        <ProjectItemControl pledgeAmount={props.project.pledgeAmount} />
      }
    </div>
  );
};

export default ProjectItem;