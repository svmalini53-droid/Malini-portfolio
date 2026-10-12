'use client';

import { useState } from 'react';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiPostman,
  SiVercel,
} from 'react-icons/si';
import {
  FaDatabase,
  FaGithub,
  FaGitAlt,
  FaCheckCircle,
  FaVial,
  FaBug,
  FaCheckDouble,
  FaFileAlt,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

type SkillCategory = 'all' | 'languages' | 'frameworks' | 'databases' | 'tools' | 'testing';

interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'databases' | 'tools' | 'testing';
  categoryLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
}

const skills: Skill[] = [
  // Languages
  {
    name: 'Python',
    category: 'languages',
    categoryLabel: 'Language',
    icon: SiPython,
    color: 'text-amber-400',
    bgColor: 'rgba(234, 179, 8, 0.1)',
    borderColor: 'rgba(234, 179, 8, 0.25)',
  },
  {
    name: 'JavaScript',
    category: 'languages',
    categoryLabel: 'Language',
    icon: SiJavascript,
    color: 'text-yellow-400',
    bgColor: 'rgba(250, 204, 21, 0.1)',
    borderColor: 'rgba(250, 204, 21, 0.25)',
  },
  {
    name: 'TypeScript',
    category: 'languages',
    categoryLabel: 'Language',
    icon: SiTypescript,
    color: 'text-sky-400',
    bgColor: 'rgba(56, 189, 248, 0.1)',
    borderColor: 'rgba(56, 189, 248, 0.25)',
  },
  {
    name: 'SQL',
    category: 'languages',
    categoryLabel: 'Database Query',
    icon: FaDatabase,
    color: 'text-blue-400',
    bgColor: 'rgba(96, 165, 250, 0.1)',
    borderColor: 'rgba(96, 165, 250, 0.25)',
  },

  // Frameworks & Backend
  {
    name: 'React.js',
    category: 'frameworks',
    categoryLabel: 'Frontend',
    icon: SiReact,
    color: 'text-cyan-400',
    bgColor: 'rgba(34, 211, 238, 0.1)',
    borderColor: 'rgba(34, 211, 238, 0.25)',
  },
  {
    name: 'Next.js',
    category: 'frameworks',
    categoryLabel: 'Full Stack',
    icon: SiNextdotjs,
    color: 'text-slate-100',
    bgColor: 'rgba(241, 245, 249, 0.1)',
    borderColor: 'rgba(241, 245, 249, 0.25)',
  },
  {
    name: 'Node.js',
    category: 'frameworks',
    categoryLabel: 'Runtime',
    icon: SiNodedotjs,
    color: 'text-emerald-400',
    bgColor: 'rgba(52, 211, 153, 0.1)',
    borderColor: 'rgba(52, 211, 153, 0.25)',
  },
  {
    name: 'Express.js',
    category: 'frameworks',
    categoryLabel: 'Backend API',
    icon: SiExpress,
    color: 'text-neutral-300',
    bgColor: 'rgba(212, 212, 216, 0.1)',
    borderColor: 'rgba(212, 212, 216, 0.25)',
  },
  {
    name: 'FastAPI',
    category: 'frameworks',
    categoryLabel: 'Python API',
    icon: SiFastapi,
    color: 'text-teal-400',
    bgColor: 'rgba(45, 212, 191, 0.1)',
    borderColor: 'rgba(45, 212, 191, 0.25)',
  },
  {
    name: 'Tailwind CSS',
    category: 'frameworks',
    categoryLabel: 'Styling',
    icon: SiTailwindcss,
    color: 'text-sky-400',
    bgColor: 'rgba(56, 189, 248, 0.1)',
    borderColor: 'rgba(56, 189, 248, 0.25)',
  },

  // Databases & Cloud
  {
    name: 'Firebase',
    category: 'databases',
    categoryLabel: 'Cloud / Auth',
    icon: SiFirebase,
    color: 'text-amber-500',
    bgColor: 'rgba(245, 158, 11, 0.1)',
    borderColor: 'rgba(245, 158, 11, 0.25)',
  },
  {
    name: 'MongoDB',
    category: 'databases',
    categoryLabel: 'NoSQL Database',
    icon: SiMongodb,
    color: 'text-emerald-500',
    bgColor: 'rgba(16, 185, 129, 0.1)',
    borderColor: 'rgba(16, 185, 129, 0.25)',
  },
  {
    name: 'MySQL',
    category: 'databases',
    categoryLabel: 'Relational DB',
    icon: SiMysql,
    color: 'text-blue-400',
    bgColor: 'rgba(96, 165, 250, 0.1)',
    borderColor: 'rgba(96, 165, 250, 0.25)',
  },
  {
    name: 'Supabase',
    category: 'databases',
    categoryLabel: 'Backend / DB',
    icon: SiSupabase,
    color: 'text-emerald-400',
    bgColor: 'rgba(52, 211, 153, 0.1)',
    borderColor: 'rgba(52, 211, 153, 0.25)',
  },

  // Tools & Platforms
  {
    name: 'Git & GitHub',
    category: 'tools',
    categoryLabel: 'Version Control',
    icon: FaGithub,
    color: 'text-slate-100',
    bgColor: 'rgba(241, 245, 249, 0.1)',
    borderColor: 'rgba(241, 245, 249, 0.25)',
  },
  {
    name: 'Postman',
    category: 'tools',
    categoryLabel: 'API Testing',
    icon: SiPostman,
    color: 'text-orange-400',
    bgColor: 'rgba(251, 146, 60, 0.1)',
    borderColor: 'rgba(251, 146, 60, 0.25)',
  },
  {
    name: 'Vercel',
    category: 'tools',
    categoryLabel: 'Deployment',
    icon: SiVercel,
    color: 'text-white',
    bgColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },

  // Testing & Quality Assurance
  {
    name: 'Software Testing',
    category: 'testing',
    categoryLabel: 'QA Assurance',
    icon: FaCheckCircle,
    color: 'text-green-400',
    bgColor: 'rgba(74, 222, 128, 0.1)',
    borderColor: 'rgba(74, 222, 128, 0.25)',
  },
  {
    name: 'API Testing',
    category: 'testing',
    categoryLabel: 'REST Verification',
    icon: FaVial,
    color: 'text-purple-400',
    bgColor: 'rgba(192, 132, 252, 0.1)',
    borderColor: 'rgba(192, 132, 252, 0.25)',
  },
  {
    name: 'Debugging',
    category: 'testing',
    categoryLabel: 'Defect Analysis',
    icon: FaBug,
    color: 'text-rose-400',
    bgColor: 'rgba(251, 113, 133, 0.1)',
    borderColor: 'rgba(251, 113, 133, 0.25)',
  },
  {
    name: 'Data Validation',
    category: 'testing',
    categoryLabel: 'Integrity Check',
    icon: FaCheckDouble,
    color: 'text-indigo-400',
    bgColor: 'rgba(129, 140, 248, 0.1)',
    borderColor: 'rgba(129, 140, 248, 0.25)',
  },
  {
    name: 'Test Documentation',
    category: 'testing',
    categoryLabel: 'Test Cases & QA',
    icon: FaFileAlt,
    color: 'text-teal-400',
    bgColor: 'rgba(45, 212, 191, 0.1)',
    borderColor: 'rgba(45, 212, 191, 0.25)',
  },
];

const categoryTabs: { id: SkillCategory; label: string }[] = [
  { id: 'all', label: 'All Skills' },
  { id: 'languages', label: 'Languages' },
  { id: 'frameworks', label: 'Frameworks & APIs' },
  { id: 'databases', label: 'Databases & Cloud' },
  { id: 'tools', label: 'Tools & DevOps' },
  { id: 'testing', label: 'Testing & QA' },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>('all');

  const filteredSkills = activeTab === 'all'
    ? skills
    : skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-24 bg-card/40 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            <span className="text-primary font-mono text-2xl sm:text-3xl mr-2">01.</span>
            Technical Skills & Expertise
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Technologies, tools, and testing practices I use to build scalable web applications and AI solutions
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categoryTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-primary text-card shadow-lg shadow-primary/25 font-semibold scale-105'
                    : 'bg-background/60 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.25 }}
                className="group relative p-5 bg-background/70 hover:bg-background/90 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 flex flex-col items-center justify-center text-center cursor-default backdrop-blur-sm"
              >
                {/* Icon Container with glowing hover */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: skill.bgColor,
                    border: `1px solid ${skill.borderColor}`,
                  }}
                >
                  <skill.icon className={`h-7 w-7 ${skill.color}`} />
                </div>

                {/* Skill Title */}
                <h3 className="text-white font-semibold text-sm sm:text-base leading-snug mb-1">
                  {skill.name}
                </h3>

                {/* Category Badge */}
                <span className="text-[11px] text-slate-400 font-mono tracking-tight px-2 py-0.5 rounded-full bg-white/5 border border-white/5">
                  {skill.categoryLabel}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Skills Summary Highlights from Resume */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10">
          <div className="p-6 rounded-2xl bg-background/50 border border-white/10 backdrop-blur-sm">
            <div className="text-primary font-mono text-xs uppercase tracking-wider mb-2 font-semibold">
              Core Languages
            </div>
            <h4 className="text-white font-bold text-lg mb-2">Python, JS, TS & SQL</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Writing clean, type-safe, and performant code for both frontend interfaces and backend API microservices.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-background/50 border border-white/10 backdrop-blur-sm">
            <div className="text-secondary font-mono text-xs uppercase tracking-wider mb-2 font-semibold">
              Databases & Cloud
            </div>
            <h4 className="text-white font-bold text-lg mb-2">Firebase, MongoDB, Supabase</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Managing real-time document stores, schema design, authentication, and cloud asset pipelines.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-background/50 border border-white/10 backdrop-blur-sm">
            <div className="text-primary font-mono text-xs uppercase tracking-wider mb-2 font-semibold">
              Quality Assurance
            </div>
            <h4 className="text-white font-bold text-lg mb-2">Testing & Validation</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              API testing with Postman, automated data verification, end-to-end defect tracking, and test case documentation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
