import { motion } from 'framer-motion';


export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Passionate Developer & Problem Solver
          </motion.p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Image Column */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-md h-96 relative">
              <div className="absolute inset-0 bg-indigo-100 rounded-lg transform rotate-3"></div>
              <img 
                src="https://mocha-cdn.com/0197b20d-45fd-70ae-96cb-e4e9654fc80e/pick.2.jpg"  
                alt="About Me" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md transform -rotate-3"
              />
            </div>
          </motion.div>
          
          {/* Text Column */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Who Am I?</h3>
            <p className="text-lg text-gray-600 mb-6">
              I'm Gangadhar Reddy, a passionate and self-driven Full Stack Web Developer dedicated to building dynamic, responsive, and user-friendly web applications. My journey into tech started with curiosity, grew through consistent learning, and continues with every line of code I write.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
            <p className="text-lg text-gray-600 mb-6">
             My journey into the world of web development began with a strong desire to create things that live on the internet. I was fascinated by how websites work and how technology connects people across the globe.
              That curiosity led me to explore modern technologies and frameworks, and soon I found myself building interactive, responsive, and dynamic web applications.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Goals</h3>
            <p className="text-lg text-gray-600">
              I'm constantly learning and exploring new technologies to stay at the forefront of web development.
              My goal is to leverage my technical expertise to build innovative solutions that make a positive impact on users' lives.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
