import { motion } from 'framer-motion';
// import { Code } from 'lucide-react';

const projectsData = [
  {
    title: "Varma Tech Labs",
    image: "https://mocha-cdn.com/0198e674-d462-7801-91d3-ca636809aa18/varma-tech-labs-logo.png",
    description: " A full-stack web development suite delivering real-world applications such as e-commerce platforms, job portals, and inventory systems using React, Node.js, and MongoDB.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe API"]
  },
  {
    title: "Lavish Catering",
    image:"https://mocha-cdn.com/0198e674-d462-7801-91d3-ca636809aa18/WhatsApp-Image-2025-05-15-at-18.48.17_dce2426c.jpg",
    description: "A catering website that allows users to browse categorized menus, select items by guest count, and send order summaries via WhatsApp.",
    techStack: ["React", "Redux", "Firebase", "Material-UI"],
    demoLink: "https://taskapp-demo.example.com",
    githubLink: "https://github.com/gangadhar/task-management"
  },
  {
    title: "Personal Portfolio Website",
    image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A responsive portfolio website built using React.js, React-Bootstrap, HTML, and CSS, designed to present full stack projects and technical skills.",
    techStack: ["React Native", "Express.js", "PostgreSQL", "Chart.js"],
    demoLink: "https://fitnessapp-demo.example.com",
    githubLink: "https://github.com/gangadhar/fitness-tracker"
  }  
  // {
  //   title: "Real Estate Marketplace",
  //   image: "https://images.unsplash.com/photo-1539193143244-c83d9436d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //   description: "A property listing platform with advanced search, property management, and user authentication.",
  //   techStack: ["Angular", "Django", "PostgreSQL", "Google Maps API"],
  //   demoLink: "https://realestate-demo.example.com",
  //   githubLink: "https://github.com/gangadhar/real-estate"
  // },
  // {
  //   title: "Weather Dashboard",
  //   image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //   description: "An interactive weather application with real-time forecasts, historical data visualization, and location-based services.",
  //   techStack: ["Vue.js", "Express.js", "OpenWeather API", "D3.js"],
  //   demoLink: "https://weather-demo.example.com",
  //   githubLink: "https://github.com/gangadhar/weather-dashboard"
  // },
  // {
  //   title: "Social Media Analytics",
  //   image: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //   description: "A comprehensive analytics platform for social media marketing with audience insights and campaign performance metrics.",
  //   techStack: ["React", "Node.js", "MongoDB", "Twitter API", "Facebook API"],
  //   demoLink: "https://analytics-demo.example.com",
  //   githubLink: "https://github.com/gangadhar/social-analytics"
  // }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Portfolio
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Recent Projects
          </motion.p>
          <motion.p 
            className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Here are some of my notable projects that showcase my skills and expertise.
          </motion.p>
        </div>
        
        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  {/* ...existing code... */}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  {/* <div className="flex items-center mb-2">
                    <Code className="h-4 w-4 text-indigo-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Tech Stack:</span>
                  </div> */}
                  {/* <div className="flex flex-wrap gap-2 mt-1">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 text-xs bg-indigo-100 text-indigo-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div> */}
                </div>
                
                {/* <div className="flex justify-between">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                  >
                    Live Demo
                    <Link className="ml-1 h-4 w-4" />
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                  >
                    View Code
                    <Github className="ml-1 h-4 w-4" />
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
