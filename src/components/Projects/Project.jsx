import { useState } from 'react';
import Card from "../Card";
import Project1 from '../../assets/images/Project/coffeto.jpg';
import Project2 from '../../assets/images/Project/clockP.jpg';
import Project3 from '../../assets/images/Project/pwdgene.jpg';
import Project4 from '../../assets/images/Project/LiftSimulator.jpg';
import Project5 from '../../assets/images/Project/finder.jpg'

const projectsData = [
  {
    id: 1,
    name: 'Coffeto',
    description: 'Description 1',
    sourceLink: 'https://github.com/devWonderkind/Cofee-Website',
    liveLink: 'https://coffetto-web.netlify.app',
    preview: Project1,
    techstack1: '#HTML',
    techstack2: '#CSS',
    techstack3: '#Bootstrap'
  },
  {
    id: 2,
    name: 'Analog Clock',
    description: 'Description 2',
    sourceLink: 'https://github.com/devWonderkind/clock',
    liveLink: 'https://coder-chahal-clock.netlify.app',
    preview: Project2,
    techstack1: '#HTML',
    techstack2: '#CSS',
    techstack3: '#JavaScript'
  },
  {
    id: 3,
    name: 'Generate Password',
    description: 'Description 3',
    sourceLink: 'https://github.com/devWonderkind/Generate-Password',
    liveLink: 'https://lockbyte.netlify.app',
    preview: Project3,
    techstack1: '#React',
    techstack2: '#Tailwind',
    techstack3: '#API'
  },
  {
    id: 4,
    name: 'Lift Simulator',
    description: 'Description 4',
    sourceLink: 'https://github.com/devWonderkind/lift-simulation-',
    liveLink: 'https://lift-simulater.netlify.app/',
    preview: Project4,
    techstack1: '#HTML',
    techstack2: '#CSS',
    techstack3: '#JavaScript'
  },
  {
    id: 5,
    name: 'Logo Finder',
    description: 'Description 4',
    sourceLink: 'https://github.com/devWonderkind/Find-Logo',
    liveLink: 'findlogo.netlify.app',
    preview: Project5,
    techstack1: '#HTML',
    techstack2: '#CSS',
    techstack3: '#JavaScript'
  },
  // {
  //   id: 6,
  //   name: 'Quote Generator',
  //   description: 'Description 4',
  //   sourceLink: 'https://github.com/devWonderkind/lift-simulation-',
  //   liveLink: 'https://lift-simulater.netlify.app/',
  //   preview: Project4,
  //   techstack1: '#HTML',
  //   techstack2: '#CSS',
  //   techstack3: '#JavaScript'
  // },
  
  // Add more projects as needed
];

const itemsPerPage = 4; // 1 row of 4 columns

export function Project() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(projectsData.length / itemsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <section className="container mx-auto p-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {currentProjects.map((project) => (
          <Card
            key={project.id}
            name={project.name}
            description={project.description}
            sourceLink={project.sourceLink}
            liveLink={project.liveLink}
            preview={project.preview}
            techstack1={project.techstack1}
            techstack2={project.techstack2}
            techstack3={project.techstack3}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {/* <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`mx-1 px-4 py-2 rounded-lg ${currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-gray-300 text-black'}`}
        >
          Back
        </button> */}

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-4 py-2 rounded-lg ${
              currentPage === index + 1 ? 'bg-cyan-500 text-white' : 'bg-gray-300 text-black'
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`mx-1 px-4 py-2 rounded-lg ${currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-gray-300 text-black'}`}
        >
          Next
        </button> */}
      </div>
    </section>
  );
}
