import { Github, Linkedin, MessageCircle, Heart, ArrowUp } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/kornipati-akash-babu-285820275',
      icon: (props: any) => <Linkedin {...props} />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/KornipatiAkash-1969',
      icon: (props: any) => <Github {...props} />,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/919346077158',
      icon: (props: any) => <MessageCircle {...props} />,
    },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-100">
          <div>
            <a href="#" className="text-lg font-black text-gray-900 tracking-tight flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                A
              </span>
              <span>KORNIPATI AKASH BABU</span>
            </a>
            <p className="text-xs text-gray-500 mt-1">
              Full Stack Web Developer & Software Engineer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            {navigation.social.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 flex items-center justify-center transition-colors border border-gray-100"
                aria-label={item.name}
              >
                <item.icon className="h-4 w-4" />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-600 flex items-center justify-center transition-colors border border-indigo-100 cursor-pointer ml-2"
              title="Back to Top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Quick Nav Links */}
        <nav className="py-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-gray-600">
          {navigation.main.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="hover:text-indigo-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-center pt-2 text-xs text-gray-400 space-y-1">
          <p>
            &copy; {currentYear} Kornipati Akash Babu. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-1 text-gray-400">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline mx-0.5" /> using React & CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
