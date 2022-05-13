const ProjectItem = () => {
  return (
    <div className="project-item">
      <div className="project-item__title">
        <div className="radio-group">
          <input type="radio" name="project-radio" className="input-radio" />
          <div className="text-group">
            <label htmlFor="project-radio">Pledge with no reward</label>
            <small>Pledge $25 or more</small>
          </div>
        </div>
      </div>
      <p className="project-item__description">Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
      <p className="project-item__quantity"><b>101</b> left</p>
    </div>
  );
};

export default ProjectItem;