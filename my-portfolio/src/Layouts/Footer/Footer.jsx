import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaHeart, 
  FaRegPaperPlane, 
  FaArrowUp,
  FaPhone,
  FaMapMarkerAlt 
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaUpwork } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { 
      icon: <FaGithub size={20} />, 
      url: 'https://github.com/FaizAli00',
      color: 'hover:text-gray-400',
      tooltip: 'GitHub'
    },
    { 
      icon: <FaLinkedin size={20} />, 
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-500',
      tooltip: 'LinkedIn'
    },
    { 
      icon: <FaUpwork size={20} />, 
      url: 'https://www.upwork.com/freelancers/~01495372c77a1eaf22',
      color: 'hover:text-sky-400',
      tooltip: 'Twitter'
    },
    { 
      icon: <SiGmail size={20} />, 
      url: 'mailto:faizu.ali9991@gmail.com',
      color: 'hover:text-red-500',
      tooltip: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -left-32 w-64 h-64 border-2 border-cyan-400 rounded-full opacity-10"
      ></motion.div>
      
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-40 h-40 border-2 border-cyan-400 rounded-full opacity-10"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="text-cyan-400 mr-2">{"<"}</span>
              Faiz Ali
              <span className="text-cyan-400 ml-2">{"/>"}</span>
            </h3>
            <p className="text-gray-400 mb-6">
              A passionate MERN Stack Developer dedicated to building exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-300 ${link.color} transition-colors relative group`}
                  aria-label={link.tooltip}
                >
                  {link.icon}
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {link.tooltip}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4 text-gray-400">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <FaRegPaperPlane className="text-cyan-400 mr-3" />
                <a href="mailto:faizu.ali9991@gmail.com" className="hover:text-cyan-400 transition-colors">
                  faizu.ali9991@gmail.com
                </a>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <FaPhone className="text-cyan-400 mr-3" />
                <span>+923125944088</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <FaMapMarkerAlt className="text-cyan-400 mr-3" />
                <span>Gilgit Baltistan, Pakistan</span>
              </motion.div>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-full flex items-center"
            >
              Back to Top <FaArrowUp className="ml-2" />
            </motion.button>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-500 text-sm flex items-center justify-center">
            Made with <FaHeart className="mx-1.5 text-red-500 animate-pulse" /> by Faiz Ali © {new Date().getFullYear()}
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Crafted with React, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;