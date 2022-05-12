import Panel from "../UI/Panel";

const CrowdFundingStats = () => {
  return (
    <Panel className="stats-panel">
      <div className="stats">
        <p className="stat">
          <b>$89,914</b>
          <small> of $100,000 backed</small>
        </p>
        <div className="line"></div>
        <p className="stat">
          <b>5,007</b>
          <small> total backers</small>
        </p>
        <div className="line"></div>
        <p className="stat">
          <b>56</b>
          <small> days left</small>
        </p>
      </div>
      <div className="stats-progress-bar">
        <div className="stats-progress-bar__fill"></div>
      </div>
    </Panel>
  );
};

export default CrowdFundingStats;