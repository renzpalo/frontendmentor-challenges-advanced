import ProjectItem from "./ProjectItem";

const ProjectList = (props) => {
  return (
    <div className="project-list">
      {props.crowdfundProjects.map((project, index) => {
        return (<ProjectItem key={index} project={project} />);
      })}
    </div>
  );
};

export default ProjectList