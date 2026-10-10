import { motion } from 'framer-motion';
import { Briefcase, Award, CheckCircle2, ArrowRight } from 'lucide-react';

const internshipData = {
  role: "Python Developer Intern",
  company: "HDLC Technologies",
  location: "Chennai, Tamil Nadu, India",
  duration: "Apr 2023 – May 2023",
  type: "Industry Internship",
  responsibilities: [
    "Developed and debugged Python scripts for data processing and automation tasks.",
    "Used Pandas and NumPy for data manipulation, analysis, and preprocessing.",
    "Performed testing, debugging, and documentation to improve code quality and reliability."
  ]
};

const certifications = [
  {
    title: "MERN Full Stack Development",
    issuer: "NxtWave CCBP 4.0 (2026)",
    year: "2026",
    badge: "Full Stack MERN",
    highlight: "Comprehensive full stack program covering JavaScript, React.js, Node.js, Express.js, SQL, HTML, and CSS."
  },
  {
    title: "Python Programming Certification",
    issuer: "Udemy",
    year: "Verified Course",
    badge: "Python Specialist",
    highlight: "Core and advanced Python programming, OOP principles, data handling, and automated scripting."
  },
  {
    title: "AWS Cloud Practitioner Training",
    issuer: "EduBridge & AWS Skill Builder",
    year: "Cloud Training",
    badge: "AWS Cloud",
    highlight: "Core AWS cloud architectural principles, IAM, compute services, storage solutions, and cloud security basics."
  }
];

export default function Resume() {
  return (
    <section id="resume" className="py-20 md:py-28 bg-white border-t border-gray-100">
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
            Track Record
          </motion.div>
          
          <motion.h2 
            className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Work Experience & Certifications
          </motion.h2>
          
          <motion.p 
            className="mt-3 text-base sm:text-lg text-gray-600"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Demonstrated industry application of programming skills and formal certifications.
          </motion.p>
        </div>

        {/* Experience & Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Internship Experience Card */}
          <motion.div 
            className="bg-slate-50/70 rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs flex flex-col justify-between"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 bg-indigo-600 text-white rounded-xl shadow-sm">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Internship Experience</h3>
                  <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wider">Professional Work History</p>
                </div>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200/70 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h4 className="text-lg font-bold text-gray-900">{internshipData.role}</h4>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-md w-fit">
                    {internshipData.duration}
                  </span>
                </div>
                
                <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-4">
                  {internshipData.company} • <span className="text-gray-500 font-normal">{internshipData.location}</span>
                </p>
                
                <ul className="space-y-3">
                  {internshipData.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-600 leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-500">
              <span>Domain: Data Processing & Python Automation</span>
              <span className="font-semibold text-indigo-600">Verified Internship</span>
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div 
            className="bg-slate-50/70 rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs flex flex-col justify-between"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 bg-purple-600 text-white rounded-xl shadow-sm">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
                  <p className="text-xs text-purple-600 font-semibold uppercase tracking-wider">Accreditations & Training</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/70 shadow-sm hover:border-indigo-200 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h4 className="text-sm sm:text-base font-bold text-gray-900">{cert.title}</h4>
                      <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded w-fit">
                        {cert.badge}
                      </span>
                    </div>
                    
                    <p className="text-xs font-semibold text-gray-500 mb-2">
                      Issued by: {cert.issuer} ({cert.year})
                    </p>
                    
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {cert.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-500">
              <span>Continuous Upskilling</span>
              <span className="font-semibold text-purple-600">3 Credentials</span>
            </div>
          </motion.div>
        </div>

        {/* Action Banner */}
        <div className="mt-14 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 rounded-2xl p-8 sm:p-10 text-white text-center shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Looking for a dedicated Full Stack Engineer?
            </h3>
            <p className="text-indigo-100 text-sm sm:text-base mb-6 leading-relaxed">
              I am actively looking for full-time software developer opportunities, internships, and engineering projects. Let's discuss how I can bring value to your engineering team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a 
                href="#contact"
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white text-indigo-700 font-bold hover:bg-indigo-50 transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <span>Contact Kornipati Akash Babu</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="mailto:akash.kornipati1969@gmail.com"
                className="w-full sm:w-auto px-7 py-3 rounded-xl border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <span>Send Direct Email</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
