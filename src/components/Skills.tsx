import { motion } from 'framer-motion';
import { Layout, Server, Wrench, HeartHandshake, Languages } from 'lucide-react';

const frontendSkills = [
  { name: "React JS", level: 90 },
  { name: "JavaScript (ES6+)", level: 85 },
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "Bootstrap", level: 85 },
];

const backendSkills = [
  { name: "Python", level: 90 },
  { name: "Node JS", level: 85 },
  { name: "Express JS", level: 85 },
  { name: "SQL & SQLite", level: 85 },
  { name: "RESTful APIs", level: 90 },
];

const toolsAndCloud = [
  { name: "AWS Cloud (Foundations)", level: 80 },
  { name: "Git & GitHub", level: 85 },
  { name: "OOP & DBMS Principles", level: 90 },
  { name: "VS Code & Postman", level: 90 },
];

const softSkills = [
  "Clear Communication",
  "Teamwork & Collaboration",
  "Problem Solving & Analytical Thinking",
  "Quick Adaptability",
  "Effective Time Management"
];

const languagesList = [
  { name: "Telugu", proficiency: "Native / Mother Tongue" },
  { name: "English", proficiency: "Fluent / Professional" },
  { name: "Hindi", proficiency: "Basic Working Knowledge" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50/70 border-t border-gray-100">
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
            Technical Stack
          </motion.div>
          
          <motion.h2 
            className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Skills & Competencies
          </motion.h2>
          
          <motion.p 
            className="mt-3 text-base sm:text-lg text-gray-600"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A breakdown of my programming languages, frameworks, developer tools, and interpersonal skills.
          </motion.p>
        </div>
        
        {/* Technical Skill Cards */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Frontend Skills */}
          <motion.div 
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200/80 overflow-hidden flex flex-col justify-between"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Layout className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Frontend Engineering</h3>
                  <p className="text-xs text-gray-500">UI/UX & Web Interfaces</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {frontendSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs sm:text-sm font-semibold text-gray-700">{skill.name}</span>
                      <span className="text-xs font-bold text-indigo-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Backend Skills */}
          <motion.div 
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200/80 overflow-hidden flex flex-col justify-between"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Backend & Databases</h3>
                  <p className="text-xs text-gray-500">APIs, Logic & Data Storage</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {backendSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs sm:text-sm font-semibold text-gray-700">{skill.name}</span>
                      <span className="text-xs font-bold text-emerald-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Cloud, Tools & Core */}
          <motion.div 
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200/80 overflow-hidden flex flex-col justify-between"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Cloud, Tools & CS</h3>
                  <p className="text-xs text-gray-500">Infrastructure & Engineering</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {toolsAndCloud.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs sm:text-sm font-semibold text-gray-700">{skill.name}</span>
                      <span className="text-xs font-bold text-purple-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Soft Skills & Languages Cards */}
        <div className="mt-8 md:mt-12 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
          
          {/* Soft Skills */}
          <motion.div 
            className="bg-white rounded-2xl shadow-sm p-6 sm:p-7 border border-gray-200/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900">Interpersonal & Soft Skills</h4>
                <p className="text-xs text-gray-500">Collaborative & Professional Strengths</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((trait, index) => (
                <span 
                  key={index} 
                  className="px-3.5 py-1.5 bg-indigo-50/70 text-indigo-700 rounded-lg text-xs sm:text-sm font-medium border border-indigo-100 hover:bg-indigo-100/70 transition-colors"
                >
                  ✓ {trait}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div 
            className="bg-white rounded-2xl shadow-sm p-6 sm:p-7 border border-gray-200/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900">Language Proficiencies</h4>
                <p className="text-xs text-gray-500">Verbal & Written Communication</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {languagesList.map((lang, index) => (
                <div key={index} className="bg-slate-50 p-3.5 rounded-xl border border-gray-100 text-center">
                  <p className="font-bold text-gray-800 text-sm">{lang.name}</p>
                  <p className="text-xs text-indigo-600 font-semibold mt-1">{lang.proficiency}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
