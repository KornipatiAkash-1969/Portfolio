import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Send, CheckCircle2, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
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
      newErrors.name = 'Please provide your name';
      valid = false;
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Please provide your email address';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Please enter your message';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
          phone: '',
        });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="relative bg-slate-50/70 py-20 md:py-28 border-t border-gray-100 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-80 h-80 -mt-20 -mr-20 bg-indigo-100/60 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-0 w-80 h-80 -mb-20 -ml-20 bg-purple-100/60 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            Get In Touch
          </motion.div>
          
          <motion.h2 
            className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let's Start a Conversation
          </motion.h2>
          
          <motion.p 
            className="mt-3 text-base sm:text-lg text-gray-600"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Have an open role, an exciting project, or want to connect? Reach out anytime!
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Information Cards */}
          <motion.div 
            className="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">Direct Contact Information</h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-8">
              Feel free to call, email, or connect with me via social profiles.
            </p>
            
            <div className="space-y-6">
              
              {/* Email */}
              <a 
                href="mailto:akash.kornipati1969@gmail.com" 
                className="flex items-start gap-4 p-3 rounded-xl hover:bg-indigo-50/50 transition-colors group"
              >
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</p>
                  <p className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors break-all">
                    akash.kornipati1969@gmail.com
                  </p>
                </div>
              </a>
              
              {/* Phone */}
              <a 
                href="tel:+919346077158" 
                className="flex items-start gap-4 p-3 rounded-xl hover:bg-indigo-50/50 transition-colors group"
              >
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone / WhatsApp</p>
                  <p className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    +91 9346077158
                  </p>
                </div>
              </a>
              
              {/* Location */}
              <div className="flex items-start gap-4 p-3 rounded-xl">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</p>
                  <p className="text-sm font-bold text-gray-900">
                    Chirala, Andhra Pradesh, India
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">Available for on-site & remote positions</p>
                </div>    
              </div>

            </div>        

            {/* Social links block */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                Connect Directly
              </h4>
              
              <div className="grid grid-cols-3 gap-3">
                <a 
                  href="https://linkedin.com/in/kornipati-akash-babu-285820275" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600 text-gray-700 transition-colors border border-gray-100"
                >
                  <Linkedin className="h-5 w-5 mb-1 text-indigo-600" />
                  <span className="text-xs font-semibold">LinkedIn</span>
                </a>

                <a 
                  href="https://github.com/KornipatiAkash-1969" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 hover:bg-gray-900 hover:text-white text-gray-700 transition-colors border border-gray-100"
                >
                  <Github className="h-5 w-5 mb-1" />
                  <span className="text-xs font-semibold">GitHub</span>
                </a>

                <a 
                  href="https://wa.me/919346077158?text=Hello%20Akash,%20I%20saw%20your%20portfolio" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors border border-emerald-100"
                >
                  <MessageCircle className="h-5 w-5 mb-1 text-emerald-600" />
                  <span className="text-xs font-semibold">WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-1">Send a Message</h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-6">
              I usually reply within 24 hours.
            </p>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center bg-emerald-50/50 rounded-xl border border-emerald-100">
                <div className="rounded-full bg-emerald-100 p-3 mb-4 text-emerald-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Thank You, {formState.name || 'Friend'}!</h4>
                <p className="mt-2 text-sm text-gray-600 max-w-sm">
                  Your message has been received. I look forward to connecting with you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="e.g. Rahul Sharma"
                      value={formState.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 text-sm rounded-xl border ${
                        errors.name ? 'border-red-400 bg-red-50/30' : 'border-gray-200 bg-gray-50/50'
                      } focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 text-sm rounded-xl border ${
                        errors.email ? 'border-red-400 bg-red-50/30' : 'border-gray-200 bg-gray-50/50'
                      } focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="+91 9876543210"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Role Opportunity / Project inquiry"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Hello Akash, I would like to discuss..."
                    value={formState.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-sm rounded-xl border ${
                      errors.message ? 'border-red-400 bg-red-50/30' : 'border-gray-200 bg-gray-50/50'
                    } focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-200 hover:shadow-indigo-300 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Akash</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
