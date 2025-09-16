import { motion } from 'framer-motion';
import { LayoutDashboard, Monitor, Smartphone, Users } from 'lucide-react';

const features = [
  {
    name: 'Mobile Responsive',
    description: 'Our websites look stunning on all devices, from phones to desktops.',
    icon: Smartphone,
  },
  {
    name: 'Modern Design',
    description: 'Clean aesthetics and intuitive interfaces that reflect your brand.',
    icon: LayoutDashboard,
  },
  {
    name: 'Performance Optimized',
    description: 'Fast loading times and smooth interactions for the best user experience.',
    icon: Monitor,
  },
  {
    name: 'User-Centered',
    description: "Designs focused on your users' needs and business goals:",
    icon: Users,
  },
];

export default function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to build your web presence
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our responsive websites are designed to look amazing and function perfectly on any device.
          </p>
        </div>

        <motion.div 
          className="mt-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <motion.div key={feature.name} className="relative" variants={item}>
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}
