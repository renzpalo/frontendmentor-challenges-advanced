import React, { useState } from 'react';

import Panel from "../UI/Panel";

const CrowdFundingHeader = (props) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleOpenProjectModal = () => {
    props.onOpenProjectModal(true);
  };

  const handleBookmark = (e) => {
    setIsBookmarked(isBookmarked ? false : true);
  };

  return (
    <Panel className="header-panel">
      <img src="images/logo-mastercraft.svg" alt="Mastercraft Logo" />
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
      <div className="button-group">
        <button 
          type="button" 
          className="button button-primary" 
          onClick={handleOpenProjectModal} 
        >
          Back this project
        </button>
        <button 
          type="button" 
          className={`button-icon button-secondary ${isBookmarked ? 'bookmarked' : ''}`}
          onClick={handleBookmark}
        >
          <img src="images/icon-bookmark.svg" alt="Bookmark Icon" />
          <small>Bookmark</small>
        </button>
      </div>
    </Panel>
  );
};

export default CrowdFundingHeader;