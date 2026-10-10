import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50/70 via-white to-white min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center py-12 md:py-20">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute right-0 top-0 -mt-16 -mr-16 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-indigo-300/25 blur-3xl" />
        <div className="absolute left-0 bottom-0 -mb-20 -ml-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-purple-300/20 blur-3xl" />
        <div className="absolute left-1/3 top-1/2 w-64 h-64 rounded-full bg-sky-200/20 blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-3/5 text-center lg:text-left"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-semibold mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for Full-time Roles & Projects
            </div>

            <p className="text-base sm:text-lg font-semibold text-indigo-600 mb-2 tracking-wide uppercase">
              Hello, I am
            </p>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-3 sm:mb-4">
              Kornipati Akash Babu
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent mb-5">
              Full Stack Developer & Software Engineer
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Computer Science and Engineering graduate with hands-on experience in <span className="font-semibold text-gray-800">JavaScript, React.js, Node.js, Express.js, Python,</span> and <span className="font-semibold text-gray-800">SQL</span>. Skilled in developing full-stack web applications, RESTful APIs, role-based dashboards, authentication workflows, and database-driven applications.
            </p>

            {/* Location & education snippet */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-gray-500 mb-8">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-500" />
                Chirala, Andhra Pradesh, India
              </span>
              <span className="hidden sm:inline text-gray-300">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                B.Tech CSE Graduate (CGPA 7.99)
              </span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 w-full">
              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-200 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-300 transition-all duration-200 flex items-center justify-center group"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#resume"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 hover:border-indigo-700 transition-all duration-200 flex items-center justify-center"
              >
                View Experience
                <Download className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Tech pills */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-2">Core Tech:</span>
              {['React.js', 'Node.js', 'Express.js', 'Python', 'REST APIs', 'SQL', 'TensorFlow'].map((tag, i) => (
                <span key={i} className="text-xs px-2.5 py-1 bg-white border border-gray-200 text-gray-700 rounded-md font-medium shadow-xs">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Profile Image with modern frame */}
          <motion.div 
            className="w-full lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Outer decorative halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative w-60 h-72 sm:w-72 sm:h-88 md:w-80 md:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-indigo-50 to-slate-100">
                <img 
                  src="./profile.jpg" 
                  alt="Kornipati Akash Babu" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating experience badge */}
              <motion.div 
                className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  MERN
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-900 leading-tight">Full Stack Developer</p>
                  <p className="text-[11px] font-medium text-indigo-600">MERN & Python</p>
                </div>
              </motion.div>

              {/* Floating credentials badge */}
              <motion.div 
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                <span className="text-xs font-semibold text-gray-800">CCBP 4.0 & AWS Cert</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
