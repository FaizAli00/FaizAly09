import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaCode,
  FaRocket,
  FaBolt,
} from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { useRef, useState, useEffect } from "react";

// Interactive Grid Background Component
const InteractiveGridBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        background: 'radial-gradient(circle at 50% 0%, #0a0a0a 0%, #000000 50%, #0a0a0a 100%)',
      }}
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Interactive grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern
            id="grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="rgb(20, 184, 166)"
              strokeWidth="0.5"
              strokeOpacity="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-teal-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

// Animated Tech Orb Component
const TechOrb = ({ tech, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        className="px-4 py-2 bg-gray-900/80 backdrop-blur-sm rounded-full text-sm border border-teal-500/30 hover:border-teal-400 transition-all relative overflow-hidden"
        animate={{
          boxShadow: isHovered 
            ? "0 0 20px rgba(20, 184, 166, 0.3)" 
            : "none",
        }}
      >
        <span className="relative z-10">{tech}</span>
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 0.8 }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

const Home = () => {
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const imageRef = useRef(null);

  // Simple hover scale effect
  const scale = useSpring(1, { stiffness: 300, damping: 30 });

  const handleMouseEnter = () => {
    setIsHoveringImage(true);
    scale.set(1.03);
  };

  const handleMouseLeave = () => {
    setIsHoveringImage(false);
    scale.set(1);
  };

  // Staggered animation for text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  // Social Icon Component
  const SocialIcon = ({ icon, url, index }) => {
    const [isHovering, setIsHovering] = useState(false);
    
    return (
      <motion.div
        className="relative"
        whileHover={{ y: -3 }}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
      >
        <motion.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 text-gray-400 hover:text-teal-400 transition-colors p-3 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-teal-500/50"
          animate={{
            boxShadow: isHovering 
              ? "0 0 25px rgba(20, 184, 166, 0.4)" 
              : "none",
          }}
        >
          {icon}
        </motion.a>
      </motion.div>
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white pt-16 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #000000, #0a0a0a, #111827)',
      }}
    >
      {/* Interactive Grid Background */}
      <InteractiveGridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              className="absolute -left-6 -top-6 text-teal-400"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              <FaBolt size={32} />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 relative"
              animate={{
                textShadow: [
                  "0 0 10px rgba(20, 184, 166, 0.3)",
                  "0 0 20px rgba(20, 184, 166, 0.5)",
                  "0 0 10px rgba(20, 184, 166, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Faiz Ali
              </span>
            </motion.h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold mb-6 h-12 flex items-center"
          >
            <FaCode className="mr-3 text-teal-400" />
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Frontend Specialist",
                2000,
                "Junior Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 mb-8 text-lg leading-relaxed"
          >
            I build exceptional digital experiences with modern technologies.
            Currently focused on building responsive web applications with
            React, Node.js, Express, and MongoDB.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="relative bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-all group overflow-hidden shadow-lg shadow-teal-500/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Me <FaRocket className="group-hover:rotate-45 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="relative border border-teal-400/50 text-teal-400 hover:text-white hover:border-teal-400 px-6 py-3 rounded-lg font-medium transition-all group overflow-hidden backdrop-blur-sm bg-gray-900/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaFileDownload /> Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 mt-8">
            {[
              { icon: <FaGithub size={20} />, url: "https://github.com/FaizAli00" },
              { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/faiz-ali009/" },
              { icon: <FaUpwork size={20} />, url: "https://www.upwork.com/freelancers/~01495372c77a1eaf22" },
            ].map((social, index) => (
              <SocialIcon key={index} {...social} index={index} />
            ))}
          </motion.div>

          {/* Tech Stack Orbs */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap gap-3"
          >
            {["React", "Node.js", "MongoDB", "TypeScript", "Next.js", "Express", "Tailwind", "GraphQL"].map((tech, index) => (
              <TechOrb key={tech} tech={tech} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Image with Modern Effects - Increased Height */}
        <motion.div
          className="md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            {/* Dynamic glow effect */}
            <motion.div
              className="absolute -inset-6 rounded-3xl blur-xl"
              style={{
                background: 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, transparent 70%)',
              }}
              animate={{
                opacity: isHoveringImage ? 0.3 : 0,
                scale: isHoveringImage ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Image container with modern frame */}
            <motion.div
              ref={imageRef}
              className="relative z-10"
              style={{ scale }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative group">
                {/* Main image with gradient overlay - INCREASED HEIGHT */}
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/image/pic2.jpg"
                    alt="Faiz Ali - Frontend Developer"
                    className="
                      w-72
                      h-96
                      md:w-80
                      md:h-[28rem]
                      lg:w-96
                      lg:h-[32rem]
                      object-cover
                      rounded-2xl
                      shadow-2xl
                      transition-all
                      duration-500
                      group-hover:scale-105
                    "
                  />
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
                </div>
                
                {/* Floating code badge - Adjusted position for new height */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-teal-500 to-cyan-600 text-white p-3 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <FaCode size={20} />
                </motion.div>
                
                {/* Experience badge - Adjusted position for new height */}
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-gray-900/90 backdrop-blur-sm text-teal-300 px-4 py-2 rounded-xl shadow-lg border border-teal-500/30"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm font-medium">3+ Years Exp</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Animated border - Adjusted for larger size */}
            <motion.div
              className="absolute -inset-4 rounded-3xl border-2 border-transparent"
              animate={{
                borderColor: isHoveringImage 
                  ? "rgba(20, 184, 166, 0.4)"
                  : "transparent",
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Additional decorative elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-teal-400/30 rounded-tl-xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-cyan-400/30 rounded-br-xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="relative">
          <div className="w-6 h-10 border-2 border-teal-400/50 rounded-full flex justify-center backdrop-blur-sm bg-gray-900/30">
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-teal-400 to-cyan-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          <motion.div
            className="absolute inset-0 rounded-full blur-lg"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              background: 'radial-gradient(circle, rgba(20, 184, 166, 0.3) 0%, transparent 70%)',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;