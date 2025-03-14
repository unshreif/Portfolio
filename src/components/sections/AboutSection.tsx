'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainerVariants}
          
        >
        

          <motion.div variants={staggerContainerVariants}>
            <motion.h2 
              variants={fadeInUpVariants}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              About <span className="text-purple-500">Me</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUpVariants}
              className="text-gray-300 mb-6"
            >
              I am a passionate web developer and designer with expertise in creating innovative digital experiences. With a strong foundation in modern web technologies, I bring ideas to life through clean code and captivating designs.
            </motion.p>
            
            <motion.p 
              variants={fadeInUpVariants}
              className="text-gray-300 mb-8"
            >
              I&apos;m a frontend developer and an UI/UX intern at the Digital Egypt Builders Initiative. With a strong foundation in HTML, CSS, and JavaScript, I specialize in crafting intuitive and dynamic web experiences. I&apos;ve also honed my skills through hands-on projects and am continuously expanding my expertise by exploring advanced technologies like React JS and TypeScript. When I’m not coding, I enjoy diving into science fiction books and practicing yoga to maintain a balanced lifestyle. I’m passionate about lifelong learning and believe in leveraging knowledge to drive both personal and professional growth. .
            </motion.p>
            
            <motion.div 
              variants={fadeInUpVariants}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Frontend</h3>
                <p className="text-gray-400">HTML, CSS3, JS, React, Next.js, GSAP, Tailwind CSS</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-bold text-xl mb-2">UI/UX</h3>
                <p className="text-gray-400">Figma, Adobe XD, Wireframing, Prototyping, usability testing, User Research,</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}