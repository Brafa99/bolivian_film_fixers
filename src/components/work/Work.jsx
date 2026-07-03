import "./Work.css";

import { useMemo, useState } from "react";

import ProjectCard from "./ProjectCard";
import FilterBar from "./FilterBar";
import VideoModal from "./VideoModal";

import projects from "../../data/projects";

import useLanguage from "../../hooks/useLanguage";

function Work() {

    const { t } = useLanguage();

    const [category, setCategory] = useState("All");

    const [selectedProject, setSelectedProject] = useState(null);

    const categories = useMemo(() => [

        "All",

        ...new Set(projects.map(project => project.category))

    ], []);

    const filteredProjects =

        category === "All"

            ? projects

            : projects.filter(project => project.category === category);

    return (

    <section
        id="work"
        className="work"
    >

        <div className="work-background-title">

            {t.work.backgroundTitle}

        </div>

        <div className="container">

            <div className="section-title">

                <span>

                    {t.work.subtitle}

                </span>

                <h2>

                    {t.work.title}

                </h2>

                <p>

                    {t.work.description}

                </p>

            </div>

            <FilterBar
                categories={categories}
                active={category}
                onChange={setCategory}
            />

            <div className="projects-grid">

                {filteredProjects.map(project => (

                    <ProjectCard
                        key={project.id}
                        project={project}
                        onOpen={setSelectedProject}
                    />

                ))}

            </div>

        </div>

        <VideoModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
        />

    </section>

);

}

export default Work;