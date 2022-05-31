import React, { useState } from 'react';

import ProjectItemControl from "./ProjectItemControl";

const ProjectItem = (props) => {
  const pledgeData = {
    type: '',
    amount: ''
  };

  const [pledgeInputData, setPledgeInputData] = useState(pledgeData);

  const handleProjectItemRadioChange = (e) => {
    setPledgeInputData({
      type: e.target.value,
      amount: 1
    });

    console.log('ProjectItem > radioChange: ', pledgeInputData);
  };

  const handleInputPledgeAmountValue = (pledgeAmountValue) => {
    setPledgeInputData({
      type: '111',
      amount: pledgeAmountValue
    });

    console.log('ProjectItem > props: ', pledgeInputData);
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
            value={props.id}
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
        <ProjectItemControl 
          pledgeAmount={props.project.pledgeAmount} 
          inputPledgeAmountValue={handleInputPledgeAmountValue}
        />
      }
    </div>
  );
};

export default ProjectItem;