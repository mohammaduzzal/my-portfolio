import { div } from "framer-motion/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
    const {id} = useParams();
    const [project, setProject] = useState(null);

    useEffect(()=>{
        fetch('/projects.json')
        .then(res => res.json())
        .then(data =>{
            const selectedProject = data.find(project => project.id === Number(id))
            setProject(selectedProject)
        })
    },[id])
    console.log(project);
    console.log(id);
    if(!project) return <span className="loading loading-infinity loading-lg"></span>

    return (
        <section id="project-details" className="py-16 bg-base-100 text-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-Montserrat font-bold text-primary text-center">{project.name}</h2>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <img src={project.image} alt={project.name} className="w-full h-96 object-cover" />
                </div>
                <div>
                    <h3 className="text-xl font-Montserrat font-semibold">Tech Stack</h3>
                    <p>{project.techStack}</p>

                    <h3 className="text-xl font-Montserrat font-semibold mt-4">Description</h3>
                    <p>{project.description}</p>

                    <h3 className="text-xl font-Montserrat font-semibold mt-4">Challenges</h3>
                    <p>{project.challenges}</p>

                    <h3 className="text-xl font-Montserrat font-semibold mt-4">Future Improvements</h3>
                    <p>{project.futureImprovements}</p>

                    <div className="mt-6 flex gap-4">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-white">
                            Live Link
                        </a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary text-white">
                            GitHub Link
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ProjectDetails;