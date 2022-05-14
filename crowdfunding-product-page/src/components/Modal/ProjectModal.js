import ProjectList from "./Projects/ProjectList";

const ProjectModal = (props) => {

  const handleModalClose = (e) => {
    
  }

  return (
    <div className="project-modal" style={{ display: props.modalDisplay }}>
      <div className="modal-panel">
        <div className="modal-panel__title">
          <h2>Back this project</h2>
          <button className="button-close" onClick={handleModalClose}></button>
        </div>
        <p className="modal-panel__description">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        <ProjectList crowdfundProjects={props.crowdfundProjects} />
      </div>
    </div>
  );
};

export default ProjectModal;