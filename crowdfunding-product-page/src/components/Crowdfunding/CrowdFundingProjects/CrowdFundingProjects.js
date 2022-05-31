import CrowdFundingProject from "./CrowdFundingProject";

const CrowdFundingProjects = (props) => {
  const handleOpenProjectModal = (isOpen, cpId) => {
    props.onOpenProjectModal(isOpen, cpId);
  };

  return (
    <div className="crowd-funding__projects">
      {props.crowdfundProjects.map((project,) => {
        if(project.pledgeAmount > 0) {
          return (
            <CrowdFundingProject 
              key={project.id}
              onOpenProjectModal={handleOpenProjectModal} 
              project={project}
            />
          )
        }
      })}
    </div>
  );
};

export default CrowdFundingProjects;