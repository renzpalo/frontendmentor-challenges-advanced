import React, { useState } from 'react';

import ProjectItem from "./ProjectItem";

const ProjectList = (props) => {
  const [selectedProjectItem, setSelectedProjectItem] = useState();

  const handleSelectProjectItem = (e) => {
    setSelectedProjectItem(e.currentTarget.id);

    console.log(selectedProjectItem);
  };

  return (
    <div className="project-list">
      {props.crowdfundProjects.map((project, index) => {
        return (
          <ProjectItem 
            id={index} 
            key={index} 
            project={project} 
            onClick={handleSelectProjectItem} 
            isSelected={selectedProjectItem == 'project-item__' + index ? true : false}
          />
        );
      })}
    </div>
  );
};

export default ProjectList