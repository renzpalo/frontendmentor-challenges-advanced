import Panel from "../UI/Panel";

const CrowdFundingStats = (props) => {
  const projectProgress = (props.crowdfundStats.fundRaised / props.crowdfundStats.fundGoal) * 100;

  return (
    <Panel className="stats-panel">
      <div className="stats">
        <p className="stat">
          <b>${props.crowdfundStats.fundRaised.toLocaleString()}</b>
          <small> of ${props.crowdfundStats.fundGoal.toLocaleString()} backed</small>
        </p>
        <div className="line"></div>
        <p className="stat">
          <b>{props.crowdfundStats.fundBackers.toLocaleString()}</b>
          <small> total backers</small>
        </p>
        <div className="line"></div>
        <p className="stat">
          <b>{props.crowdfundStats.fundDaysLeft.toLocaleString()}</b>
          <small> days left</small>
        </p>
      </div>
      <div className="stats-progress-bar">
        <div className="stats-progress-bar__fill" style={{ width: projectProgress + '%' }}></div>
      </div>
    </Panel>
  );
};

export default CrowdFundingStats;