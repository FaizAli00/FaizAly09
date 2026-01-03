import { motion, AnimatePresence } from 'framer-motion';
// import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-xl shadow-teal-900/10' 
          : 'bg-transparent'
      }`}
      style={{
        background: scrolled 
          ? 'linear-gradient(to bottom, rgba(10, 10, 10, 0.95), rgba(0, 0, 0, 0.9))' 
          : 'transparent',
        borderBottom: scrolled 
          ? '1px solid rgba(20, 184, 166, 0.1)' 
          : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo on the left */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 text-2xl md:text-3xl font-bold cursor-pointer">
              Faiz Ali
            </span>
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
                  spy={true}
                  offset={-70}
                  className="cursor-pointer text-gray-300 hover:text-teal-400 hover:font-bold text-base font-semibold transition-colors relative group"
                >
                  {item.name}
                  <motion.span 
                    className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 w-0 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Hire Me Button on the right */}
          <div className="hidden md:block">
            <motion.a
              href="#contact"
              className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium transition-all rounded-lg group"
              whileHover={{ scale: 1.05 }}
              style={{
                background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.9), rgba(6, 182, 212, 0.9))',
                boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3)',
              }}
            >
              <span className="relative w-full text-center text-white transition-colors duration-200 font-medium">
                Hire Me
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
              />
            </motion.a>
          </div>

          {/* Mobile menu button - stays on the right */}
          <div className="md:hidden">
            <motion.button 
              onClick={() => setNavOpen(!navOpen)}
              className="text-gray-300 hover:text-teal-400 focus:outline-none p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {navOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.98), rgba(0, 0, 0, 0.95))',
              backdropFilter: 'blur(10px)',
              borderBottom: '1px solid rgba(20, 184, 166, 0.1)',
            }}
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <motion.div
                  key={item.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setNavOpen(false)}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-teal-400 hover:bg-gray-800/50 cursor-pointer transition-all duration-200"
                    activeClass="text-teal-400 bg-gray-800/30"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="pt-2"
              >
                <a
                  href="#contact"
                  className="block px-4 py-3 rounded-lg text-base font-medium text-center text-white transition-all duration-200"
                  onClick={() => setNavOpen(false)}
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.9), rgba(6, 182, 212, 0.9))',
                    boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3)',
                  }}
                >
                  Hire Me
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated underline for active nav item */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400"
        initial={{ width: 0 }}
        animate={{ width: scrolled ? '100%' : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.nav>
  );
};

export default Navbar;