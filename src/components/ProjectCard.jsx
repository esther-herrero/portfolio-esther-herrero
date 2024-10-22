import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <Link to={`/projects/${project.id}`}>Ver detalles</Link>
    </div>
  );
};

export default ProjectCard;
