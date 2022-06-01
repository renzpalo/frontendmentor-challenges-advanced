import React, { useState, useEffect, useRef } from 'react';

import ProjectItemControl from "./ProjectItemControl";

const ProjectItem = (props) => {
  const pledgeData = {
    type: '',
    amount: ''
  };

  const refRadioButton = useRef();

  const selectedItem = props.selectedItem == 'project-item__' + props.project.id;

  const [pledgeInputData, setPledgeInputData] = useState(pledgeData);
  
  useEffect(() => {
    setPledgeInputData((prevState) => {
      return {
        type: props.project.id,
        amount: prevState.amount
      }
    });
  }, [selectedItem]);


  const handleProjectItemRadioChange = (e) => {
    setPledgeInputData((prevState) => {
      return {
        type: e.target.value,
        amount: prevState.amount
      }
    });

    props.pledgeAmountData(pledgeInputData);
  };

  const handleInputPledgeAmountValue = (pledgeAmountValue) => {
    setPledgeInputData((prevState) => {
      return {
        type: prevState.type,
        amount: pledgeAmountValue
      }
    });

    props.pledgeAmountData(pledgeInputData);
  };

  return (
    <div 
      id={`project-item__${props.id}`}
      className={`project-item ${selectedItem ? 'selected' : ''} ${props.project.quantity <= 0 && props.project.pledgeAmount > 0 ? 'disabled' : ''}`}
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
            value={props.project.id}
            checked={selectedItem} 
            onChange={handleProjectItemRadioChange} 
            ref={refRadioButton}
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
      {selectedItem &&
        <ProjectItemControl 
          pledgeAmount={props.project.pledgeAmount} 
          inputPledgeAmountValue={handleInputPledgeAmountValue}
        />
      }
    </div>
  );
};

export default ProjectItem;