import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Code2 } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-indigo-600" />,
      title: "B.Tech in CSE",
      subtitle: "Hindustan Univ, Chennai (CGPA 7.99)"
    },
    {
      icon: <Code2 className="w-5 h-5 text-indigo-600" />,
      title: "Full Stack MERN",
      subtitle: "NxtWave CCBP 4.0 Intensive"
    },
    {
      icon: <Briefcase className="w-5 h-5 text-indigo-600" />,
      title: "Python Intern",
      subtitle: "HDLC Technologies, Chennai"
    },
    {
      icon: <Award className="w-5 h-5 text-indigo-600" />,
      title: "AWS Certified",
      subtitle: "Cloud Practitioner Foundations"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            About Me
          </motion.div>
          
          <motion.h2 
            className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Passionate Developer & Problem Solver
          </motion.h2>
          
          <motion.p 
            className="mt-3 text-base sm:text-lg text-gray-600"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Bridging technical precision, robust engineering, and responsive user experiences.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Image Column */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative background plate */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-indigo-100 via-purple-50 to-pink-50 rounded-3xl transform -rotate-2"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-50">
                <img 
                  src="./profile.jpg"  
                  alt="Kornipati Akash Babu" 
                  className="w-full h-80 sm:h-96 object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4 sm:p-5 bg-white border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">Kornipati Akash Babu</h3>
                  <p className="text-xs font-semibold text-indigo-600">Full Stack Web & Python Developer</p>
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Chirala, Andhra Pradesh • Open to Relocation / Remote
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Text and stats Column */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-gray-50/80 border border-gray-200/60 flex items-start gap-3 hover:bg-indigo-50/40 hover:border-indigo-200 transition-colors">
                  <div className="p-2 rounded-lg bg-white shadow-xs">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                    <p className="text-xs text-gray-600 font-medium">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-5 bg-indigo-600 rounded-full inline-block"></span>
                  Who Am I?
                </h3>
                <p>
                  I'm <strong className="text-gray-900">Kornipati Akash Babu</strong>, a Computer Science Engineering graduate with hands-on experience in full-stack development, modern databases, and machine learning. I enjoy transforming challenging specifications into clean, scalable, and responsive software solutions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-5 bg-indigo-600 rounded-full inline-block"></span>
                  My Technical Journey
                </h3>
                <p>
                  My engineering journey at Hindustan Institute of Technology & Science gave me strong foundations in Object-Oriented Programming (OOP), Database Management Systems (DBMS), and algorithms. I took that curiosity into building hands-on projects, from deep learning emotion recognizers to role-based result management systems, and solidified my backend and frontend expertise with the NxtWave CCBP 4.0 program and an internship at HDLC Technologies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-5 bg-indigo-600 rounded-full inline-block"></span>
                  Core Philosophy & Goals
                </h3>
                <p>
                  I prioritize clean architecture, clear API contracts, and user-centric frontend experiences. I am looking forward to collaborating with progressive software teams where I can contribute to high-impact web products and scalable backend services.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 shadow-sm transition-all"
              >
                Let's Connect
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 text-gray-700 text-sm font-semibold hover:bg-gray-200 transition-all"
              >
                Explore Projects
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
