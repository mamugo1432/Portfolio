import "./CardProject.css";
interface CardProjectProps {
    image:string,
    title:string,
    description:string,
    technologies:string[],
    githubUrl:string,
    demoUrl:string
}

export default function CardProject({image, title, description, technologies, githubUrl, demoUrl}:CardProjectProps) {
  return (
    <article className="project-card">
      <img
        src={image}
        alt={title}
        className="project-card__image"
      />

      <div className="project-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="project-card__technologies">
        {technologies.map(tech => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-card__links">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        )}
        </div>
    </article>
  );
}