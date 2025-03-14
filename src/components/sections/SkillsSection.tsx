'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    skills: [
      { name: 'HTML, CSS', level: 95 },
      { name: 'Java Script', level: 93 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'GSAP', level: 87 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 83 },
      { name: 'GraphQL', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
  {
    id: 'design',
    name: 'Design',
    skills: [
      { name: 'UI/UX Design', level: 85 },
      { name: 'Figma', level: 80 },
      { name: 'Adobe XD', level: 75 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Animation', level: 85 },
    ],
  },
  {
    id: 'other',
    name: 'Other',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Python', level: 95 },
      { name: 'C++', level: 84 },
      { name: 'Problem Solving', level: 90 },
      { name: 'DevOps', level: 80 },
      { name: 'Performance Optimization', level: 85 },
    ],
  },
];

const SkillBar = ({ skill, index }: { skill: { name: string; level: number }, index: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-purple-400 font-medium">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-gradient-to-r from-purple-600 to-purple-400 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-purple-500">Skills</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            I&apos;ve developed expertise in various technologies and tools throughout my career.
            Here&apos;s a breakdown of my technical skills.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center mb-10 space-x-2">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 mb-2 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories
            .find((category) => category.id === activeCategory)
            ?.skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-6 bg-gray-800 rounded-xl"
        >
          <h3 className="text-xl font-bold mb-4 text-center">
            Always Learning
          </h3>
          <p className="text-gray-300 text-center">
            I&apos;m constantly expanding my skill set and staying up-to-date with the latest technologies.
            Currently exploring: AI integration, WebAssembly, and AR/VR development.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 