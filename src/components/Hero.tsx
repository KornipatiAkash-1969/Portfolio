import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-50 to-purple-50 min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-indigo-200 opacity-20 blur-3xl" />
        <div className="absolute left-0 bottom-0 -mb-20 -ml-20 w-96 h-96 rounded-full bg-purple-200 opacity-20 blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <motion.div 
            className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg font-semibold text-indigo-600 mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4">
              Gangadhar Reddy A
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-6">
              Full Stack Web Developer
            </h2>
            <p className="text-lg text-gray-600 max-w-lg mb-8">
              I'm Gangadhar Reddy, a passionate MERN STACK DEVELOPER dedicated to building clean, responsive, and user-friendly web experiences
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 rounded-md bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center"
              >
                Hire Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#resume"
                className="px-6 py-3 rounded-md border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition-colors duration-300 flex items-center justify-center"
              >
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div 
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-600 rounded-full opacity-10 blur-xl transform scale-110"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full overflow-hidden border-4 border-white shadow-lg relative">
                <img 
                   src="https://mocha-cdn.com/0197b20d-45fd-70ae-96cb-e4e9654fc80e/861-passport-size-photo-1.png" 
                  alt="A Gangadhar Reddy" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating tag */}
              <div className="absolute -bottom-2 -right-2 bg-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
