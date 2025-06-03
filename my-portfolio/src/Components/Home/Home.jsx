import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-cyan-400">Faiz Ali</span>
          </h1>
          <div className="text-2xl md:text-3xl font-semibold mb-6 h-12">
            <TypeAnimation
              sequence={[
                'MERN Stack Developer',
                2000,
                'Frontend Specialist',
                2000,
                'Backend Engineer',
                2000,
                'Full Stack Developer',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-gray-300 mb-8 text-lg">
            I build exceptional digital experiences with modern technologies.
            Currently focused on building responsive web applications with React,
            Node.js, Express, and MongoDB.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:bg-opacity-10 px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <FaFileDownload /> Resume
            </motion.a>
          </div>
          <div className="flex mt-8 space-x-4">
            {[
              { icon: <FaGithub size={24} />, url: 'https://github.com/yourusername' },
              { icon: <FaLinkedin size={24} />, url: 'https://linkedin.com/in/yourusername' },
              { icon: <FaTwitter size={24} />, url: 'https://twitter.com/yourusername' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#06b6d4' }}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-cyan-400 opacity-20 blur-lg"></div>
            <div className="relative rounded-full overflow-hidden border-4 border-cyan-400">
              <motion.img
                src="/image/pic.jpeg"
                alt="Profile"
                className="w-64 h-64 md:w-80 md:h-80 object-cover"
                whileHover={{ scale: 1.03 }}
              />
            </div>
            {/* <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-5 -left-5 w-32 h-32 border-t-4 border-b-4 border-cyan-400 rounded-full opacity-60"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-5 -right-5 w-24 h-24 border-l-4 border-r-4 border-cyan-400 rounded-full opacity-60"
            ></motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;