import React, { useEffect, useState } from 'react';

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  interface Project {
    id: number;
    name: string;
    description: string;
    link: string;
  }
  useEffect(() => {
    // Fetch data from the server-side endpoint
    fetch('project')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4">Featured Projects</h1>
      {projects.length === 0 ? (
        <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span>
      </div>
      ) : (
        // Data is loaded, map and display the projects
        <ul className="space-y-4">
          {projects.map((project) => (
            <div className = 'mockup-code'>
            <li key={project.id} className="margin-left p-5">
              <a
                href={project.link}
                className="text-blue-500 hover:underline hover:text-blue-600 underline"
              >
                <code>{project.name}</code>
              </a>{' '}<br></br>
                <code>{project.description}</code>
            </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Projects;
