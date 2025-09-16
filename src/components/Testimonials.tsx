import { motion } from 'framer-motion';

const testimonials = [
  {
    content: "The responsive design perfectly adapts to all our devices. Our mobile traffic has increased by 40% since the redesign.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechNova"
  },
  {
    content: "Working with this team was seamless. They delivered a beautiful, responsive website that exceeded our expectations.",
    author: "Michael Chen",
    role: "CEO",
    company: "Startify"
  },
  {
    content: "Our e-commerce conversion rates improved dramatically after implementing the responsive design strategies.",
    author: "Emma Rodriguez",
    role: "Digital Strategist",
    company: "RetailPlus"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">Testimonials</h2>
            <p className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What our clients are saying
            </p>
          </div>
          
          <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-xl text-gray-500 italic mb-4">"{testimonial.content}"</blockquote>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100">
                        <span className="text-indigo-600 font-medium text-lg">
                          {testimonial.author.charAt(0)}
                        </span>
                      </span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                      <div className="flex text-sm text-gray-500">
                        <span>{testimonial.role}</span>
                        <span className="mx-1">&middot;</span>
                        <span>{testimonial.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
