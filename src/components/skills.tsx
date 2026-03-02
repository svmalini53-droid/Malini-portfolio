'use client';

import { FaCss3Alt, FaGithub, FaJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Express.js', icon: SiExpress, color: 'text-green-500' },
  { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'Git & GitHub', icon: FaGithub, color: 'text-slate-200' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-orange-400' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
];

export default function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="text-primary">01.</span> My Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative p-6 bg-background/60 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-primary/60 hover:shadow-[0_0_24px_rgba(56,189,248,0.25)] flex flex-col items-center justify-center skill-card"
              variants={itemVariants}
            >
              <div className="mb-3">
                <skill.icon className={`h-10 w-10 ${skill.color} transition-transform duration-300 group-hover:scale-110`} />
              </div>
              <h3 className="text-white font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
