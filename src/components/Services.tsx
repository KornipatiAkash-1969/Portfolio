import { motion } from 'framer-motion';
import { BarChart4, Code, Palette, Search } from 'lucide-react';

const services = [
  {
    title: 'Web Design',
    description: 'Custom designs that represent your brand and engage your audience.',
    icon: Palette,
    href: '#web-design',
    color: 'from-pink-500 to-orange-500',
  },
  {
    title: 'Web Development',
    description: 'Robust, scalable websites built with the latest technologies.',
    icon: Code,
    href: '#web-development',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your search rankings and drive more traffic to your site.',
    icon: Search,
    href: '#seo',
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Analytics',
    description: 'Understand your audience and make data-driven decisions.',
    icon: BarChart4,
    href: '#analytics',
    color: 'from-purple-500 to-violet-500',
  },
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Solutions tailored to your needs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our comprehensive web services help you build and maintain an effective online presence.
          </p>
        </div>

        <div className="mt-20 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4`}>
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 mb-4">{service.description}</p>
                <a 
                  href={service.href} 
                  className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
                >
                  Learn more
                  <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path 
                      fillRule="evenodd" 
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
