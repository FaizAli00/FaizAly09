import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaCode className="text-cyan-400 text-2xl" />,
      skills: [
        { name: 'React', icon: <SiReact className="text-cyan-400 text-xl" />, level: 90 },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 text-xl" />, level: 85 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400 text-xl" />, level: 80 },
        { name: 'HTML/CSS', icon: <FaCode className="text-orange-500 text-xl" />, level: 95 }
      ]
    },
    {
      title: 'Backend',
      icon: <FaServer className="text-cyan-400 text-2xl" />,
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs className="text-green-500 text-xl" />, level: 85 },
        { name: 'Express', icon: <SiExpress className="text-gray-400 text-xl" />, level: 80 },
        { name: 'REST APIs', icon: <FaServer className="text-blue-400 text-xl" />, level: 75 },
        { name: 'Authentication', icon: <FaTools className="text-red-400 text-xl" />, level: 70 }
      ]
    },
    {
      title: 'Database',
      icon: <FaDatabase className="text-cyan-400 text-2xl" />,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600 text-xl" />, level: 75 },
        { name: 'Mongoose', icon: <FaDatabase className="text-red-600 text-xl" />, level: 70 },
        { name: 'Firebase', icon: <FaDatabase className="text-yellow-500 text-xl" />, level: 65 },
        { name: 'PostgreSQL', icon: <FaDatabase className="text-blue-600 text-xl" />, level: 60 }
      ]
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-[#051110] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Here are the technologies I&apos;ve worked with and my proficiency level in each
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <span className="mr-2">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: index * 0.1 + skillIndex * 0.05
                        }}
                        className="h-2 rounded-full bg-cyan-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Technologies */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            Other Technologies I Work With
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React',
              'Git',
              'Github',
              'JavaScript',
              'Tailwind',
              'BootStrap',
              'TypeScript',
              'Node.js',
              'Authentication'
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-700 px-4 py-2 rounded-full text-sm flex items-center"
              >
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
