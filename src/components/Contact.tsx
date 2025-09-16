import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    PhoneNo: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });

    // Clear error when user starts typing (only for fields that have errors)
    if (e.target.name in errors && errors[e.target.name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real app, you would send the form data to a server here
      console.log('Form submitted:', formState);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
          PhoneNo: '',
        });
      }, 3000);
    }
  };

  return (
    <div id="contact" className="relative bg-gray-50 py-24">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 -mt-20 -mr-20 bg-indigo-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute left-0 bottom-0 w-80 h-80 -mb-20 -ml-20 bg-purple-100 rounded-full opacity-20 blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Contact Me
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let's Work Together
          </motion.p>
          <motion.p 
            className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm currently available for freelance work or full-time opportunities.
          </motion.p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-1 bg-white rounded-lg shadow-md p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>gangadhar0553@gmail.com</p>
                  <p className="mt-1">Always open to discuss </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>+91 7993144564</p>
                  {/* <p className="mt-1">Mon-Fri from 9am to 6pm</p> */}
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>Hyderabad, Telangana</p>
                  <p className="mt-1">India - 500072</p>
                </div>    
              </div>
            </div>        

            
            <div className="mt-12">
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Connect With Me</h4>
              <div className="flex space-x-5">
                <a href="https://www.linkedin.com/in/gangadhar-reddy-avuthu-936a57201/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://github.com/Gangadharreddy369" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors duration-300">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" />
                </a>
                 <a href="https://wa.me/+917993144564" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors duration-300">
                  <span className="sr-only">WhatsApp</span>
                    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="h-6 w-6"
  >
    <path d="M16 .5A15.5 15.5 0 0 0 .5 16a15.4 15.4 0 0 0 2.2 7.9L.6 31.4l7.7-2a15.6 15.6 0 0 0 7.7 2c8.5 0 15.4-6.9 15.4-15.5S24.5.5 16 .5zm0 28.2a13.3 13.3 0 0 1-6.7-1.8l-.5-.3-4.6 1.2 1.2-4.5-.3-.5A13.2 13.2 0 1 1 16 28.7zm7.4-9c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.7-.2-1 .2-.3.4-1.1 1.2-1.3 1.4-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.9l.6-.7c.2-.2.3-.4.5-.7.2-.3.1-.5 0-.8s-1-2.4-1.4-3.2c-.4-.8-.8-.7-1.1-.7h-.9c-.3 0-.7.1-1 .4-.3.4-1.3 1.3-1.3 3.1 0 1.8 1.3 3.6 1.5 3.9.2.3 2.5 4 6.1 5.6.9.4 1.6.7 2.1.9.9.3 1.6.3 2.2.2.7-.1 2.3-1 2.6-1.9.3-.9.3-1.7.2-1.9-.2-.2-.5-.3-.9-.5z" />
  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2 bg-white rounded-lg shadow-md p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <div className="rounded-full bg-green-100 p-3 mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Thank you!</h3>
                <p className="mt-2 text-gray-500">Your message has been sent successfully. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md ${
                        errors.name ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md ${
                        errors.email ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className={`py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md ${
                        errors.message ? 'border-red-500' : ''
                      }`}
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  </div>
                </div>
                
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
