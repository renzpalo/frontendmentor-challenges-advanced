import Panel from "../../UI/Panel";

const CrowdFundingProject = () => {
  return (
    <Panel className="crowd-funding__project">
      <div className="project-title">
        <h3>Bamboo Stand</h3>
        <p>Pledge $25 or more</p>
      </div>
      <p className="project-description">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
      <div className="project-controls">
        <p><b>101</b> left</p>
        <button className="button button-primary">Select Reward</button>
      </div>
    </Panel>
  );
};

export default CrowdFundingProject;