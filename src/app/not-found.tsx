'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-purple-500">404</span>
          </h1>
          <p className="text-2xl text-gray-300">
            Page Not Found
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-64 h-64 mx-auto mb-12"
        >
          <div className="absolute inset-0 bg-purple-500/20 rounded-full animate-pulse" />
          <div className="absolute inset-4 bg-purple-500/10 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="absolute inset-8 bg-purple-500/5 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          <p className="text-gray-400 text-lg">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors duration-300"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-purple-600 hover:bg-purple-600/10 rounded-full transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 