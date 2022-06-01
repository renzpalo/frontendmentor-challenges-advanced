import React, { useState } from 'react';

const SuccessModal = (props) => {
  
  const handleModalClose = (e) => {
    props.successModalClose(true);
  };

  return (
    <div 
      className="success-modal" 
    >
      <div className="success-modal__panel">
        <img src="images/icon-check.svg" alt="Check Icon" />
        <h2>Thanks for your support!</h2>
        <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
        <button 
          type="button" 
          className="button button-primary" 
          onClick={handleModalClose}
        >
          Got It!
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;