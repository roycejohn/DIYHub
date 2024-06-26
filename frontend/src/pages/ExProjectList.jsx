import { useEffect, useState } from 'react';
import { getProjects } from '../hooks/apiHook.js';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProjects();
        setProjects(result);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Project List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="bg-white rounded-lg shadow-md p-6">
            {project.coverImage && (
              <img src={project.coverImage} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            )}
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-2">{project.description}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
