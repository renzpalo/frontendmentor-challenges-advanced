import CrowdFundingProject from "./CrowdFundingProject";

const CrowdFundingProjects = (props) => {
  const handleOpenProjectModal = (isOpen) => {
    props.onOpenProjectModal(isOpen);
  };

  return (
    <div className="crowd-funding__projects">
      <CrowdFundingProject onOpenProjectModal={handleOpenProjectModal} />
      <CrowdFundingProject onOpenProjectModal={handleOpenProjectModal} />
      <CrowdFundingProject onOpenProjectModal={handleOpenProjectModal} />
    </div>
  );
};

export default CrowdFundingProjects;