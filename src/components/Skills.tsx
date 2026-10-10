import { motion } from 'framer-motion';
import { Layout, Server, Database, Brain, ShieldCheck, Terminal, HeartHandshake, Languages } from 'lucide-react';

const skillCategories = [
  {
    category: "Programming Languages",
    icon: Terminal,
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50 text-blue-600",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    category: "Frontend Development",
    icon: Layout,
    color: "from-sky-500 to-blue-600",
    bgLight: "bg-sky-50 text-sky-600",
    skills: [
      { name: "React.js", level: 90 },
      { name: "React Router", level: 88 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Bootstrap", level: 85 }
    ]
  },
  {
    category: "Backend Development",
    icon: Server,
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50 text-emerald-600",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 88 },
      { name: "FastAPI", level: 82 },
      { name: "RESTful APIs", level: 90 }
    ]
  },
  {
    category: "Databases",
    icon: Database,
    color: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50 text-amber-600",
    skills: [
      { name: "SQLite", level: 90 },
      { name: "MySQL", level: 85 }
    ]
  },
  {
    category: "Machine Learning & Vision",
    icon: Brain,
    color: "from-purple-500 to-indigo-600",
    bgLight: "bg-purple-50 text-purple-600",
    skills: [
      { name: "TensorFlow & Keras", level: 82 },
      { name: "OpenCV", level: 85 },
      { name: "Scikit-learn", level: 80 },
      { name: "Librosa (Audio MFCC)", level: 80 }
    ]
  },
  {
    category: "Auth & Security",
    icon: ShieldCheck,
    color: "from-rose-500 to-pink-600",
    bgLight: "bg-rose-50 text-rose-600",
    skills: [
      { name: "JWT (JSON Web Tokens)", level: 88 },
      { name: "Cookie-Based Sessions", level: 85 },
      { name: "Protected Routes", level: 90 }
    ]
  }
];

const developerToolsAndConcepts = [
  { category: "Developer Tools", items: ["Git", "GitHub", "Visual Studio Code", "Postman"] },
  { category: "Core Concepts", items: ["Object-Oriented Programming (OOP)", "DBMS", "API Integration", "Responsive Web Design"] }
];

const softSkills = [
  "Communication",
  "Teamwork",
  "Problem-Solving",
  "Adaptability",
  "Time Management"
];

const languagesList = [
  { name: "Telugu", proficiency: "Native" },
  { name: "English", proficiency: "Fluent" },
  { name: "Hindi", proficiency: "Basic" }
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
            Categorized technical capabilities, engineering toolchains, and interpersonal proficiencies.
          </motion.p>
        </div>
        
        {/* Technical Skill Cards Grid */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group, groupIdx) => {
            const Icon = group.icon;
            return (
              <motion.div 
                key={groupIdx}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200/80 overflow-hidden flex flex-col justify-between"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
                viewport={{ once: true }}
              >
                <div className={`h-2 bg-gradient-to-r ${group.color}`}></div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-xl ${group.bgLight} flex items-center justify-center font-bold`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">{group.category}</h3>
                      <p className="text-xs text-gray-500">{group.skills.length} Core proficiencies</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {group.skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-xs sm:text-sm font-semibold text-gray-700">{skill.name}</span>
                          <span className="text-xs font-bold text-indigo-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <motion.div 
                            className={`bg-gradient-to-r ${group.color} h-2 rounded-full`}
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
            );
          })}
        </div>

        {/* Developer Tools & Core Concepts Row */}
        <div className="mt-8 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
          {developerToolsAndConcepts.map((group, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-sm p-6 sm:p-7 border border-gray-200/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3">{group.category}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 bg-slate-50 text-gray-800 rounded-lg text-xs sm:text-sm font-medium border border-gray-200 shadow-2xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills & Languages Cards */}
        <div className="mt-6 md:mt-8 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
          
          {/* Soft Skills */}
          <motion.div 
            className="bg-white rounded-2xl shadow-sm p-6 sm:p-7 border border-gray-200/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900">Soft Skills</h4>
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
            transition={{ duration: 0.5, delay: 0.35 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900">Languages</h4>
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
