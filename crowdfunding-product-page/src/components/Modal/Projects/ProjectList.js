import React, { useState, useEffect } from 'react';

import ProjectItem from "./ProjectItem";

const ProjectList = (props) => {
  const [selectedProjectItem, setSelectedProjectItem] = useState();
  const [pledgeAmountData, setPledgeAmount] = useState();

  // Set the selected ProjectItem on modal from where the ProjectItem on CrowdFundingAbout component was clicked
  useEffect(() => {
    setSelectedProjectItem('project-item__' + props.selectedProject);
  }, [props.selectedProject]);  

  const handleSelectProjectItem = (e) => {
    setSelectedProjectItem(e.currentTarget.id);
  };

  // Get data from ProjectItem props.pledgeAmountData
  const handlePledgeAmountData = (data) => {
    setPledgeAmount(data);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate data
    if(pledgeAmountData) {
      props.onPledgeSuccess(true);

      setPledgeAmount(null);
    }
  };

  return (
    <form 
      id="project-list__form" 
      onSubmit={handleFormSubmit}
    >
      <div className="project-list">
        {props.crowdfundProjects.map((project) => {
          return (
            <ProjectItem 
              id={project.id} 
              key={project.id} 
              project={project} 
              onClick={handleSelectProjectItem} 
              selectedItem={selectedProjectItem} 
              pledgeAmountData={handlePledgeAmountData}
            />
          );
        })}
      </div>
    </form>
  );
};

export default ProjectList