import ProjectList from "./Projects/ProjectList";

const ProjectModal = () => {
  return (
    <div className="project-modal">
      <div className="modal-panel">
        <div className="modal-panel__title">
          <h2>Back this project</h2>
          <button className="button-close"></button>
        </div>
        <p className="modal-panel__description">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        <ProjectList />
      </div>
    </div>
  );
};

export default ProjectModal;