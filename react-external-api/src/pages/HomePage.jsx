function ProjectsPage(props) {
  return (
    <div>
      <h1>Projects</h1>
      {props.projects.map((project) => {
        return (
          <div key={project._id} className="project">
            <h3>{project.name}</h3>
            <p>{project.technologies}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsPage;
