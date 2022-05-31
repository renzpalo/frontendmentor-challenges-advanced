import React, { useState } from 'react';

const ProjectItemControl = (props) => {
  const [pledgeAmount, setPledgeAmount] = useState(props.pledgeAmount);

  const handlePledgeAmountChange = (e) => {
    setPledgeAmount(e.target.value);

    props.inputPledgeAmountValue(e.target.value);
  };

  return (
    <div className="project-item__control">
      <p>Enter your pledge</p>
      <div className="form-group">
        <input 
          type="number" 
          name="project-item__input" 
          className="input" 
          min={props.pledgeAmount} 
          value={pledgeAmount} 
          onChange={handlePledgeAmountChange}
        />
        <button type="submit" className="button button-primary">Continue</button>
      </div>
    </div>
  )
};

export default ProjectItemControl;