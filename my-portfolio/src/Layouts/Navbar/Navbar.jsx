import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-gray-900 text-white z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo on the left */}
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="text-xl font-bold"
          >
            <span className="text-cyan-400 text-3xl font-bold cursor-pointer">Faiz Ali</span>
            
            
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-cyan-400 text-lg font-bold transition-colors relative group"
                >
                  {item.name}
                  <motion.span 
                    className="absolute left-0  bottom-0 h-0.5 bg-cyan-400 w-0 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Hire Me Button on the right */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-cyan-600 rounded-xl group"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-cyan-500 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Hire Me
              </span>
            </a>
          </div>

          {/* Mobile menu button - stays on the right */}
          <div className="md:hidden">
            <button 
              onClick={() => setNavOpen(!navOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {navOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => setNavOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-cyan-400 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="px-3 py-2 rounded-md text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700 text-center"
              onClick={() => setNavOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;