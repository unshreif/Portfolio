'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const projectCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    projects: [
      {
        id: 1,
        title: 'Modern E-commerce',
        description: 'A sleek and responsive e-commerce interface built with React and Tailwind CSS, featuring smooth animations and intuitive user interactions.',
        color: 'bg-purple-700',
        tags: ['React', 'Tailwind CSS', 'Framer Motion', 'UI/UX'],
        link: '/coming-soon',
      },
      {
        id: 2,
        title: 'Interactive Dashboard',
        description: 'A dynamic admin dashboard with real-time data visualization, custom charts, and responsive design for optimal user experience.',
        color: 'bg-blue-700',
        tags: ['Next.js', 'TypeScript', 'Chart.js', 'UI Design'],
        link: '/coming-soon',
      },
      {
        id: 3,
        title: 'Personal Blog',
        description: 'fast-loading, SEO-friendly blog using tools like Next.js combined with Markdown for streamlined content creation and management.',
        color: 'bg-indigo-700',
        tags: ['Next.js', 'Three.js', 'GSAP', 'UI/UX'],
        link: '/coming-soon',
      },
    ],
  },
  {
    id: 'uiux',
    name: 'UI/UX',
    projects: [
      {
        id: 4,
        title: 'Banking App Redesign',
        description: 'A complete redesign of a banking application focusing on user experience, accessibility, and modern design principles.',
        color: 'bg-emerald-700',
        tags: ['UI/UX', 'Figma', 'User Research', 'Wireframing'],
        link: '/coming-soon',
      },
      {
        id: 5,
        title: 'Travel App Interface',
        description: 'An intuitive travel application interface with user-centered design, interactive maps, and seamless booking experience.',
        color: 'bg-rose-700',
        tags: ['UI Design', 'Prototyping', 'User Testing', 'Figma'],
        link: '/coming-soon',
      },
      {
        id: 6,
        title: 'Mobile App UI Kit',
        description: 'A comprehensive UI kit for mobile applications, featuring custom components, animations, and design system documentation.',
        color: 'bg-violet-700',
        tags: ['Figma', 'UI Design', 'Prototyping', 'Design System'],
        link: '/coming-soon',
      },
    ],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projectCategories[0]['projects'][0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group relative overflow-hidden rounded-xl bg-gray-800 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0 bg-purple-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className={`relative h-full w-full ${project.color} flex items-center justify-center`}>
          <h3 className="text-2xl font-bold text-white opacity-30 group-hover:opacity-70 transition-opacity duration-300">
            {project.title}
          </h3>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-gray-700 text-purple-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <motion.a
          href={project.link}
          className="inline-flex items-center text-purple-400 hover:text-purple-300"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Explore my latest work showcasing innovative solutions and creative designs
            using cutting-edge web technologies.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center mb-10 space-x-2">
          {projectCategories.map((category) => (
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectCategories
            .find((category) => category.id === activeCategory)
            ?.projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105"
          >
            Let&apos;s Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
} 