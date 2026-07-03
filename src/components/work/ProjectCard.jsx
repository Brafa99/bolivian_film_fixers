import "./ProjectCard.css";

function ProjectCard({ project, onOpen }) {

    const thumbnail = project.thumbnail
        ? project.thumbnail
        : `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;

    return (

        <article
    className="project-card"
    onClick={() => onOpen(project)}
>

            <div className="project-image">

                <img
                    src={thumbnail}
                    alt={project.title}
                    loading="lazy"
                />

                <div className="project-overlay">

                    <button
                        className="play-button"
                        type="button"
                    >
                        ▶
                    </button>

                </div>

            </div>

            <div className="project-info">

                {project.category && (
                    <span className="project-category">
                        {project.category}
                    </span>
                )}

                <h3>{project.title}</h3>

            </div>

        </article>

    );

}

export default ProjectCard;