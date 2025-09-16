import { motion } from 'framer-motion';
import {  Download } from 'lucide-react';


export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Resume
          </motion.h2>
          {/* <motion.p 
            className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Work Experience & Certifications
          </motion.p> */}
        </div>

        <div className="mt-12 flex justify-center">
          <motion.a 
  href="https://drive.google.com/file/d/1M1_pr0VM2UJgQhlg2hze8eUKeNLaMcE5/view?usp=sharing"  // 👈 Matches exactly the file name in public
  download="https://drive.google.com/file/d/1M1_pr0VM2UJgQhlg2hze8eUKeNLaMcE5/view?usp=sharing"
  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Download className="h-5 w-5 mr-2" />
 View & Download Full Resume
</motion.a>
        </div>
       

       
        
      </div>
    </section>
  );
}
