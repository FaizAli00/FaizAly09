import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-20 text-white relative overflow-hidden flex items-center justify-center"
      style={{
        background: "#151517",
      }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-cyan-400">
              Me
            </span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-linear-to-r from-teal-400 to-cyan-400 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          <motion.p
            className="max-w-3xl mx-auto text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </motion.p>
        </motion.div>

        {/* Centered Content - Get to know me */}
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-4xl"
          >
            <motion.h3
              className="text-3xl font-semibold mb-8 text-center text-gray-100"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              Get to know me!
            </motion.h3>
            
            <div className="space-y-6 text-gray-300">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg border-l-4 border-teal-500"
              >
                I'm a{" "}
                <strong className="text-transparent bg-clip-text bg-linear-to-r from-teal-300 to-cyan-300">
                  MERN Stack Developer
                </strong>{" "}
                building the Front-end and Back-end of Websites and Web
                Applications that leads to the success of the overall product.
                Check out some of my work in the{" "}
                <strong className="text-transparent bg-clip-text bg-linear-to-r from-teal-300 to-cyan-300">
                  Projects
                </strong>{" "}
                section.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg border-l-4 border-cyan-500"
              >
                I also like sharing content related to the stuff that I have
                learned over the years in{" "}
                <strong className="text-transparent bg-clip-text bg-linear-to-r from-teal-300 to-cyan-300">
                  Web Development
                </strong>{" "}
                so it can help other people of the Dev Community. Feel free to
                Connect or Follow me on my{" "}
                <a
                  href="https://www.linkedin.com/in/faiz-ali009/"
                  className="text-cyan-400 hover:text-teal-400 hover:underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{" "}
                where I post useful content related to Web Development and
                Programming.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg border-l-4 border-teal-500"
              >
                I'm open to{" "}
                <strong className="text-transparent bg-clip-text bg-linear-to-r from-teal-300 to-cyan-300">
                  Job
                </strong>{" "}
                opportunities where I can contribute, learn and grow. If you
                have a good opportunity that matches my skills and experience
                then don't hesitate to{" "}
                <strong className="text-transparent bg-clip-text bg-linear-to-r from-teal-300 to-cyan-300">
                  contact
                </strong>{" "}
                me.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="flex justify-center mt-10"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.upwork.com/freelancers/~01495372c77a1eaf22"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block relative bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-medium transition-all group overflow-hidden shadow-lg shadow-teal-500/20"
              >
                <span className="relative z-10">Let's Talk</span>
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-cyan-600 to-teal-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Projects Completed", value: "50+" },
            { label: "Happy Clients", value: "30+" },
            { label: "Years Experience", value: "3+" },
            { label: "Technologies", value: "20+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl text-center border border-gray-800"
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-cyan-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;