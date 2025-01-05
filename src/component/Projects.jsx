import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() =>{
        fetch('/projects.json')
        .then(res => res.json())
        .then(data =>{
            setProjects(data)
        })
    },[])
    


    return (
        <section id="projects" className="py-16 bg-base-100 text-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-Montserrat font-bold text-primary text-center">
          Projects
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card w-full bg-base-200 shadow-lg">
              <figure>
                <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl font-Montserrat font-semibold">{project.name}</h3>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/project-details/${project.id}`}
                    className="bg-primary text-white px-6 py-3 rounded-md shadow-md hover:bg-secondary transition duration-300"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Projects;