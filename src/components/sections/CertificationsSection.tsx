'use client';

import { motion } from 'framer-motion';

const certifications = [
  {
    id: 1,
    title: 'The Front-End career path',
    organization: 'scrimba',
    issueDate: 'September 2024',
    expiryDate: 'No Expiration',
    credentialId: 'uzqZBGud',
    verificationUrl: 'https://scrimba.com/certificate/uzqZBGud/gfrontend',
  },
  {
    id: 2,
    title: 'AJAX',
    organization: 'coursera',
    issueDate: 'october 2024',
    expiryDate: 'No Expiration',
    credentialId: '4T6YZ0MBT7RJ',
    verificationUrl: 'https://coursera.org/verify/4T6YZ0MBT7RJ',
  },
  {
    id: 3,
    title: 'Meta Front-End Developer',
    organization: 'Meta',
    issueDate: 'February 2024',
    expiryDate: 'No Expiration',
    credentialId: 'META-FE-123',
    verificationUrl: 'https://www.coursera.org/verification',
  },
];

export default function CertificationsSection() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="certifications" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-purple-500">Certifications</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements that demonstrate my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={fadeInUpVariants}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold mb-2 text-purple-400">{cert.title}</h3>
                <p className="text-gray-300 mb-2">{cert.organization}</p>
                <div className="text-sm text-gray-400 mb-4">
                  <p>Issued: {cert.issueDate}</p>
                  <p>Expires: {cert.expiryDate}</p>
                  <p className="mt-1">Credential ID: {cert.credentialId}</p>
                </div>
                <div className="mt-auto">
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Verify Certificate
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}