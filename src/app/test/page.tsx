'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className='min-h-screen bg-zinc-700 text-white font-[family-name:var(--font-geist-sans)]'>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='px-6 sm:px-8 md:px-16 lg:px-24 py-20 md:py-32'
      >
        <div className='max-w-6xl mx-auto'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className='text-5xl md:text-7xl font-bold mb-6'
          >
            Creative Developer<span className='text-purple-500'>.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className='text-lg md:text-xl text-gray-300 max-w-2xl mb-10'
          >
            Building modern web experiences with cutting-edge technologies and
            thoughtful design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className='flex flex-col sm:flex-row gap-4'
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-purple-600 hover:bg-purple-700 text-white rounded-md px-8 py-3 font-medium transition-colors'
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-transparent border border-purple-500 text-purple-500 hover:bg-purple-900/20 rounded-md px-8 py-3 font-medium transition-colors'
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Bento Grid Section */}
      <section className='px-6 sm:px-8 md:px-16 lg:px-24 py-24 bg-black'>
        <div className='max-w-6xl mx-auto'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-3xl md:text-4xl font-bold mb-12 text-center'
          >
            My <span className='text-purple-500'>Work</span>
          </motion.h2>

          <motion.div
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-3 gap-6'
          >
            {/* Bento Item 1 - Large */}
            <motion.div
              variants={item}
              whileHover={{ y: -5 }}
              className='md:col-span-2 md:row-span-2 bg-zinc-900 rounded-xl p-6 overflow-hidden group relative'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              <div className='h-48 md:h-64 bg-zinc-800 rounded-lg mb-4 overflow-hidden'>
                <div className='w-full h-full bg-gradient-to-br from-purple-600/40 to-blue-600/40'></div>
              </div>
              <h3 className='text-xl font-bold mb-2'>Featured Project</h3>
              <p className='text-gray-400'>
                A comprehensive application built with Next.js and Tailwind CSS.
              </p>
              <div className='mt-4 flex gap-2'>
                <span className='px-2 py-1 bg-zinc-800 text-xs rounded-full'>
                  Next.js
                </span>
                <span className='px-2 py-1 bg-zinc-800 text-xs rounded-full'>
                  Tailwind
                </span>
                <span className='px-2 py-1 bg-zinc-800 text-xs rounded-full'>
                  TypeScript
                </span>
              </div>
            </motion.div>

            {/* Bento Item 2 */}
            <motion.div
              variants={item}
              whileHover={{ y: -5 }}
              className='bg-zinc-900 rounded-xl p-6 overflow-hidden group relative'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              <div className='h-32 bg-zinc-800 rounded-lg mb-4 overflow-hidden'>
                <div className='w-full h-full bg-gradient-to-br from-indigo-600/40 to-fuchsia-600/40'></div>
              </div>
              <h3 className='text-lg font-bold mb-2'>UI Components</h3>
              <p className='text-gray-400'>
                Reusable components for modern applications.
              </p>
            </motion.div>

            {/* Bento Item 3 */}
            <motion.div
              variants={item}
              whileHover={{ y: -5 }}
              className='bg-zinc-900 rounded-xl p-6 overflow-hidden group relative'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              <div className='h-32 bg-zinc-800 rounded-lg mb-4 overflow-hidden'>
                <div className='w-full h-full bg-gradient-to-br from-pink-600/40 to-purple-600/40'></div>
              </div>
              <h3 className='text-lg font-bold mb-2'>API Integration</h3>
              <p className='text-gray-400'>
                Seamless data fetching with next-gen APIs.
              </p>
            </motion.div>

            {/* Bento Item 4 */}
            <motion.div
              variants={item}
              whileHover={{ y: -5 }}
              className='md:col-span-2 bg-zinc-900 rounded-xl p-6 overflow-hidden group relative'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              <div className='h-32 bg-zinc-800 rounded-lg mb-4 overflow-hidden'>
                <div className='w-full h-full bg-gradient-to-br from-blue-600/40 to-cyan-600/40'></div>
              </div>
              <h3 className='text-lg font-bold mb-2'>Animation Library</h3>
              <p className='text-gray-400'>
                Motion effects built with Framer Motion for engaging user
                experiences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className='px-6 sm:px-8 md:px-16 lg:px-24 py-16 border-t border-zinc-800'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className='font-[family-name:var(--font-geist-mono)] text-gray-400'>
              © {new Date().getFullYear()} • Designed & Built with Next.js
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='flex gap-6 mt-4 md:mt-0'
          >
            <a
              href='#'
              className='text-gray-400 hover:text-purple-500 transition-colors'
            >
              GitHub
            </a>
            <a
              href='#'
              className='text-gray-400 hover:text-purple-500 transition-colors'
            >
              LinkedIn
            </a>
            <a
              href='#'
              className='text-gray-400 hover:text-purple-500 transition-colors'
            >
              Twitter
            </a>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
