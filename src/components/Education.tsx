import { motion } from 'framer-motion';
import { Award, Calendar, MapPin } from 'lucide-react';

const educationData = [
  // {
  //   degree: "Master of Science in Computer Science",
  //   institution: "Jawaharlal Nehru Technological University",
  //   location: "Hyderabad, India",
  //   period: "2018 - 2020",
  //   achievements: [
  //     "Graduated with Distinction",
  //     "Specialized in Machine Learning and Web Technologies",
  //     "Completed thesis on Responsive Web Application Frameworks"
  //   ]
  // },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: " Hindustan Institute of Technology & Science",
    location: "Chennai, India",
    period: "2020 - 2024",
    // achievements: [
    //   "First Class with Distinction",
    //   "Technical Lead for University Web Portal",
    //   "Won 1st Prize in National Coding Competition"
    // ]
  },
  {
    degree: "Intermediate ",
    institution: " Narayana JR College",
    location: "vijayawada,India",
    period: "2018 - 2020",
    // achievements: [
    //   "Completed with Excellence",
    //   "Built 5 real-world projects",
    //   "Mentored junior developers"
    // ]
  }
];

export default function Education() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Academic Background
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200 hidden md:block"></div>
          
          <motion.div 
            className="space-y-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {educationData.map((education, index) => (
              <motion.div 
                key={index}
                className="relative"
                variants={item}
              >
                {/* Timeline dot for desktop */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-6 h-6 rounded-full bg-indigo-500 border-4 border-white shadow"></div>
                
                <div className={`relative md:w-1/2 ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:pr-8'
                } bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 p-2 rounded-lg">
                      <Award className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-900">{education.degree}</h3>
                  </div>
                  
                  <div className="mb-2 flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{education.period}</span>
                  </div>
                  
                  <div className="mb-4 flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{education.institution}, {education.location}</span>
                  </div>
                  
                  {/* <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Achievements:</h4>
                    <ul className="space-y-1">
                      {education.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-indigo-100 text-indigo-600 mr-2 text-xs">✓</span>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
