const ProjectItemControl = () => {
  return (
    <div className="project-item__control">
      <p>Enter your pledge</p>
      <div className="form-group">
        <input type="number" name="project-item__input" className="input" />
        <button type="submit" className="button button-primary">Continue</button>
      </div>
    </div>
  )
};

export default ProjectItemControl;