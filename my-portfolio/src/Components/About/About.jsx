import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const skills = [
    { name: 'Frontend', icon: <FaCode size={24} />, items: ['React', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'] },
    { name: 'Backend', icon: <FaServer size={24} />, items: ['Node.js', 'Express', 'REST APIs', 'Authentication'] },
    { name: 'Database', icon: <FaDatabase size={24} />, items: ['MongoDB', 'Mongoose', 'Firebase', 'PostgreSQL'] },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-sky-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-cyan-400">About</span> Me
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-6">Get to know me!</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a <strong className="text-cyan-400">MERN Stack Developer</strong> building the Front-end and Back-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong className="text-cyan-400">Projects</strong> section.
              </p>
              <p>
                I also like sharing content related to the stuff that I have learned over the years in <strong className="text-cyan-400">Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="#" className="text-cyan-400 hover:underline">LinkedIn</a> where I post useful content related to Web Development and Programming.
              </p>
              <p>
                I'm open to <strong className="text-cyan-400">Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong className="text-cyan-400">contact</strong> me.
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.upwork.com/freelancers/~01495372c77a1eaf22"
              target="_blank"
              className="inline-block mt-8 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Lets Talk 
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-700 p-6 rounded-lg shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-cyan-400 mr-3">{skill.icon}</div>
                    <h4 className="text-xl font-medium">{skill.name}</h4>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;