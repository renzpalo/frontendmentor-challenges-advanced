import CrowdFundingProject from "./CrowdFundingProject";

const CrowdFundingProjects = (props) => {
  const handleOpenProjectModal = (isOpen) => {
    props.onOpenProjectModal(isOpen);
  };

  return (
    <div className="crowd-funding__projects">
      {props.crowdfundProjects.map((project, index) => {
        if(project.pledgeAmount > 0) {
          return (
            <CrowdFundingProject 
              key={index}
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