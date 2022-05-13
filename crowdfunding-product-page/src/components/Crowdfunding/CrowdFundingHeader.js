import Panel from "../UI/Panel";
import ProjectModal from "../Modal/ProjectModal";

const CrowdFundingHeader = () => {
  return (
    <Panel className="header-panel">
      <img src="images/logo-mastercraft.svg" alt="Mastercraft Logo" />
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
      <div className="button-group">
        <button type="button" className="button button-primary">Back this project</button>
        <button type="button" className="button-icon button-secondary">
          <img src="images/icon-bookmark.svg" alt="Bookmark Icon" />
          <small>Bookmark</small>
        </button>
      </div>
      <ProjectModal />
    </Panel>
  );
};

export default CrowdFundingHeader;