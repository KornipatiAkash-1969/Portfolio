import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles, BookOpen } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  skillsOrFocus?: string;
  type: string;
}

const educationData: EducationItem[] = [
  {
    degree: "B.Tech – Computer Science and Engineering",
    institution: "Hindustan Institute of Technology and Science",
    location: "Chennai, Tamil Nadu",
    period: "2020 – 2024",
    type: "Undergraduate Degree",
    grade: "CGPA: 7.99 / 10",
    skillsOrFocus: "Core CS, Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS, Computer Networks"
  },
  {
    degree: "MERN Full Stack Program – NxtWave CCBP 4.0",
    institution: "NxtWave CCBP 4.0",
    location: "Online",
    period: "2025 – 2026",
    type: "Full Stack Specialization",
    skillsOrFocus: "JavaScript, React.js, Node.js, Express.js, SQL, HTML, CSS, RESTful APIs"
  },
  {
    degree: "Intermediate – MPC",
    institution: "Vignana Bharathi Junior College",
    location: "Chirala, Andhra Pradesh",
    period: "2018 – 2020",
    type: "Higher Secondary",
    grade: "CGPA: 8.04 / 10",
    skillsOrFocus: "Mathematics, Physics, Chemistry"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Noble English Medium High School",
    location: "Chirala, Andhra Pradesh",
    period: "2017 – 2018",
    type: "Secondary School",
    grade: "CGPA: 8.2 / 10",
    skillsOrFocus: "General Sciences & Mathematics"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-slate-50/70 border-t border-gray-100">
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
            Academic Foundation
          </motion.div>
          
          <motion.h2 
            className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Education & Qualifications
          </motion.h2>
          
          <motion.p 
            className="mt-3 text-base sm:text-lg text-gray-600"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My formal engineering education, full stack specialization, and academic credentials.
          </motion.p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/70 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Subtle top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 group-hover:h-2 transition-all"></div>
              
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700">
                    <BookOpen className="w-3 h-3" />
                    {edu.type}
                  </span>
                  
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-indigo-600 transition-colors">
                  {edu.degree}
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-4">
                  <span className="font-medium text-gray-800">{edu.institution}</span>
                  <span className="hidden sm:inline text-gray-300">•</span>
                  <span className="inline-flex items-center gap-1 text-gray-500">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    {edu.location}
                  </span>
                </div>

                {edu.skillsOrFocus && (
                  <div className="mb-4">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                      Key Curriculum / Focus:
                    </span>
                    <p className="text-xs sm:text-sm text-gray-600 bg-gray-50/80 p-3 rounded-lg border border-gray-100 leading-relaxed">
                      {edu.skillsOrFocus}
                    </p>
                  </div>
                )}
              </div>

              {edu.grade && (
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">Academic Standing:</span>
                  <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    {edu.grade}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
