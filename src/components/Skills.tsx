import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Palette, Terminal, Cpu } from 'lucide-react';

const skills = [
  { 
    name: 'Frontend Development',
    icon: <Code2 className="w-8 h-8" />,
    description: 'Pengembangan antarmuka pengguna (user interface) suatu situs web atau aplikasi',
    technologies: ['Laravel', 'Js', 'React Js'],
    color: 'bg-violet-100 text-violet-600'
  },
  {
    name: 'Database Management',
    icon: <Database className="w-8 h-8" />,
    description: 'Manajemen database untuk Dalam mengelola suatu project',
    technologies: ['My SQL', 'Prisma'],
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    name: 'Backend Development',
    icon: <Terminal className="w-8 h-8" />,
    description: 'Pengelolaan database dan server dalam sebuah aplikasi',
    technologies: ['Node.js', 'Python', 'Java'],
    color: 'bg-cyan-100 text-cyan-600'
  },
  {
    name: 'UI/UX Design',
    icon: <Palette className="w-8 h-8" />,
    description: 'Membuat Desain Antarmuka Pengguna (UI) yang menarik dan intuitif',
    technologies: ['Figma', ],
    color: 'bg-pink-100 text-pink-600'
  },
  {
    name: 'Mobile Development',
    icon: <Cpu className="w-8 h-8" />,
    description: 'Membuat aplikasi mobile dengan fokus pada user experience',
    technologies: ['Flutter','Java'],
    color: 'bg-orange-100 text-orange-600'
  },
  {
    name: 'Web Services',
    icon: <Globe className="w-8 h-8" />,
    description: 'Membuat API untuk mengintegrasikan aplikasi',
    technologies: ['Rest Api','Postman'],
    color: 'bg-blue-100 text-blue-600'
  }
];

const cardVariants = {
  animate: (index: number) => ({
    y: [0, -10, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      delay: index * 0.2
    }
  })
};

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="pt-20 md:pt-24"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-violet-600 to-cyan-600 text-transparent bg-clip-text"
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index}
              animate="animate"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <div className={`${skill.color} w-fit p-3 rounded-lg mb-4`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-600 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map(tech => (
                  <span key={tech} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;