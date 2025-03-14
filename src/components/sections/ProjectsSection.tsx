'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'interactive Dashboard',
    description: 'a modern, fast dashboard using React with Next.js and Tailwind CSS. This project is ideal for managing and interactively analyzing data in real time.',
    color: 'bg-purple-700',
    tags: ['Next.js', 'React JS', 'GSAP', 'Tailwind CSS'],
    link: '/coming-soon',
  },
  {
    id: 2,
    title: 'E-commerce Website',
    description: 'an integrated e-commerce platform using TypeScript, featuring a dynamic search system and responsive design for a seamless shopping experience.',
    color: 'bg-blue-700',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    link: '/coming-soon',
  },
  {
    id: 3,
    title: 'Personal Blog',
    description: 'fast-loading, SEO-friendly blog using tools like Next.js combined with Markdown for streamlined content creation and management.',
    color: 'bg-indigo-700',
    tags: ['Next.js', 'React JS', 'Typescript', 'Tailwind CSS'],
    link: '/coming-soon',
  },
  {
    id: 4,
    title: 'Chat APP',
    description: 'a responsive chat or messaging app using React along with WebSocket and Socket.IO to enable fast, real-time communication between users.',
    color: 'bg-violet-700',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    link: '/coming-soon',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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