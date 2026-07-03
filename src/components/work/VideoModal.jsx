import "./VideoModal.css";

function VideoModal({ project, onClose }) {

    if (!project) return null;

    return (

        <div
            className="video-modal"
            onClick={onClose}
        >

            <div
                className="video-content"
                onClick={(e)=>e.stopPropagation()}
            >

                <button
                    className="close-button"
                    onClick={onClose}
                >
                    ×
                </button>

                <iframe
                    src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1`}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />

                <h2>

                    {project.title}

                </h2>

                <p>

                    {project.description}

                </p>

            </div>

        </div>

    );

}

export default VideoModal;