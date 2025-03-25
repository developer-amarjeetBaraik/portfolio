
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  url: string;
  gitHubUrl:string;
}

const Projects = () => {
  const [animated, setAnimated] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "YouBoard – A Visual Planning Tool",
      description: "A powerful tool for visualizing and organizing plans, built using the raw <canvas> API. Offers an intuitive interface for adding, moving, and modifying elements, making idea visualization effortless and efficient.",
      tags: ["React", "Node.js", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1470&auto=format&fit=crop",
      url: "/projects/e-commerce",
      gitHubUrl: "https://github.com/developer-amarjeetBaraik/your-board.io.git",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A sleek and professional portfolio showcasing expertise in web development, UI/UX design, and interactive projects. Designed for seamless navigation and an engaging user experience to highlight standout work.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1470&auto=format&fit=crop",
      url: "/projects/portfolio",
      gitHubUrl: "/projects/portfolio",
    },
    {
      id: 3,
      title: "Clicks Studio – Photo & Videography Brand",
      description: "A creative project for Clicks Studio, a professional photo and videography team based in Ranchi. Specializing in high-quality content, including regional music videos and engaging YouTube Shorts.",
      tags: ["React", "TypeScript", "Firebase"],
      imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop",
      url: "/projects/task-manager",
      gitHubUrl: "/projects/task-manager",
    },
    {
      id: 4,
      title: "Independence Day Certification Project",
      description: "An interactive web experience where users complete a set of mandatory actions to receive a ‘The Deshbhakt Certificate.’ A creative way to engage users in a patriotic digital celebration.",
      tags: ["JavaScript", "APIs", "D3.js"],
      imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1470&auto=format&fit=crop",
      url: "/projects/weather-app",
      gitHubUrl: "/projects/weather-app",
    },
  ];

  // Get all unique tags from projects
  // const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  // Filter projects by selected tag
  const filteredProjects = selectedTag
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('projects');
      if (!element) return;

      const position = element.getBoundingClientRect();
      const isVisible = position.top < window.innerHeight - 200;

      if (isVisible) {
        setAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-black to-navy/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="section-heading">My Projects</h2>
          <p className="section-subheading">
            A showcase of my recent work, spanning various technologies and domains
          </p>
        </div>

        {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedTag(null)}
            className={`glass-button px-6 py-2.5 transition-all duration-300 ${
              selectedTag === null 
                ? 'bg-navy-light text-white' 
                : 'bg-white/5 hover:bg-white/10 text-gray-300'
            }`}
          >
            All
          </button>
          
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`glass-button px-6 py-2.5 transition-all duration-300 ${
                selectedTag === tag 
                  ? 'bg-navy-light text-white' 
                  : 'bg-white/5 hover:bg-white/10 text-gray-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transform transition-all duration-700 h-full ${animated ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="project-card h-full flex overflow-hidden relative group">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-purple-700/90 rounded-3xl border border-purple-600/30"
                  style={{
                    backgroundImage: 'linear-gradient(to bottom right, rgba(91, 33, 182, 0.9), rgba(124, 58, 237, 0.9))',
                    boxShadow: 'inset 0 0 30px rgba(139, 92, 246, 0.3)'
                  }}
                />

                {/* Glow effect */}
                {/* <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" /> */}

                {/* Dots decoration */}
                {/* <div className="absolute left-0 top-0 w-full h-full overflow-hidden">
                  <div className="absolute left-4 top-8 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-60" />
                  <div className="absolute left-8 top-20 w-1 h-1 bg-purple-300 rounded-full opacity-40" />
                  <div className="absolute right-12 top-6 w-1 h-1 bg-purple-300 rounded-full opacity-40" />
                  <div className="absolute right-6 bottom-12 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-60" />
                </div> */}

                <div className="flex flex-row h-full w-full relative z-10">
                  <div className="w-1/3 p-6 flex items-center justify-center">
                    <div className="relative w-36 h-36 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/40 to-purple-600/40 rounded-full blur-md" />
                      {/* image */}
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-32 h-32 object-cover object-center rounded-2xl relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                        style={{
                          boxShadow: '0 10px 25px -5px rgba(91, 33, 182, 0.5)'
                        }}
                      />
                    </div>
                  </div>

                  <div className="w-2/3 p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-gray-200 mb-6 text-sm">
                      {project.description}
                    </p>

                    <span className="flex justify-start items-center gap-3">
                      <a
                        href={project.url}
                        target='_blank'
                        className={`learn-more-btn px-6 py-2 w-max rounded-full text-white text-sm font-medium transition-all duration-300 border border-purple-500/50
                        ${hovered === project.id ? 'bg-purple-500/40' : 'bg-purple-500/20'}`}
                      >
                        View Live
                      </a>

                      <a
                        href={project.gitHubUrl}
                        target='_blank'
                        className={`learn-more-btn px-6 py-2 w-max rounded-full text-white text-sm font-medium transition-all duration-300 border border-purple-500/50
                        ${hovered === project.id ? 'bg-purple-500/40' : 'bg-purple-500/20'}`}
                      >
                        View Code
                      </a>
                    </span>
                  </div>
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
