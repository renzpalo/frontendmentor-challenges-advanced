import React, { useState } from 'react';

const SuccessModal = () => {
  const [isModalClose, setIsModalClose] = useState(false);
  const handleModalClose = (e) => {
    setIsModalClose(true)
  };

  return (
    <div 
      className="success-modal" 
      style={{ display: isModalClose ? 'none' : '' }}
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