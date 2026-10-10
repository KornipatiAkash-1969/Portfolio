import { motion } from 'framer-motion';
import { Code, Github, Layers, CheckCircle2 } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubLink: string;
}

const projectsData: Project[] = [
  {
    title: "Academic Performance Management System",
    category: "Full Stack Web Application",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A comprehensive full-stack academic management application featuring role-based dashboards, automated marks processing, and grade monitoring.",
    highlights: [
      "Developed a full-stack academic management application featuring role-based dashboards for teachers, students, and coordinators.",
      "Implemented student and subject management, assessments, marks entry, grade tracking, and academic performance monitoring.",
      "Built RESTful APIs and integrated SQLite to manage academic records, authentication, and role-based access."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "SQLite", "RESTful APIs", "Role-Based Auth"],
    githubLink: "https://github.com/KornipatiAkash-1969"
  },
  {
    title: "Multimodal Emotion Recognition Platform",
    category: "Machine Learning & AI Platform",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "An advanced multimodal AI platform merging facial expression analysis with speech emotion recognition using neural networks and decision-level fusion.",
    highlights: [
      "Developed a multimodal platform combining facial expression analysis and speech emotion recognition to classify seven emotions.",
      "Implemented a CNN-based facial emotion model and an MLP-based speech classifier using Librosa MFCC features.",
      "Integrated FastAPI endpoints with a React dashboard to compare facial and vocal predictions using decision-level fusion."
    ],
    techStack: ["Python", "React.js", "FastAPI", "TensorFlow", "OpenCV", "Librosa", "Scikit-learn"],
    githubLink: "https://github.com/KornipatiAkash-1969"
  },
  {
    title: "Travel Trip Web Application",
    category: "Responsive Web Application",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A responsive travel booking application featuring a multi-step booking wizard, cookie-based session authentication, and protected routing.",
    highlights: [
      "Developed a responsive travel booking application with a five-step wizard for trip details, dates, guests, and assistance.",
      "Implemented authentication, protected routes, cookie-based session management, and login and logout functionality.",
      "Built trip viewing and cancellation features with form validation, booking confirmation, and responsive layouts."
    ],
    techStack: ["React.js", "JavaScript", "React Router", "CSS3", "Cookie Sessions", "Form Validation"],
    githubLink: "https://github.com/KornipatiAkash-1969"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            Portfolio
          </motion.div>
          
          <motion.h2 
            className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Featured Technical Projects
          </motion.h2>
          
          <motion.p 
            className="mt-3 text-base sm:text-lg text-gray-600"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Real-world full-stack platforms, machine learning architectures, and responsive web applications.
          </motion.p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/80 hover:-translate-y-1.5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image banner with category badge */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-gray-800 shadow-sm inline-flex items-center gap-1">
                    <Layers className="w-3 h-3 text-indigo-600" />
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-3.5 left-3.5 right-3.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-gray-600 mb-4 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="mb-5 bg-slate-50 p-3.5 rounded-xl border border-gray-100">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-2">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="mb-6">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Code className="h-3.5 w-3.5 text-indigo-600" />
                      <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Tech Stack:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-2.5 py-1 text-xs font-medium bg-indigo-50/80 text-indigo-700 rounded-lg border border-indigo-100/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors shadow-xs"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                  
                  <span className="text-xs text-gray-400 font-medium">
                    Verified Project
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
