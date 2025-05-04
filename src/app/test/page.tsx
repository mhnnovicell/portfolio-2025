'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Metadata } from 'next';
import { useState } from 'react';
// Add to your layout.tsx or in Next.js metadata configuration
const metadata = {
  title: 'Your Name | Professional Developer',
  description:
    'Full-stack developer specializing in modern web applications, responsive design, and UX/UI development.',
  keywords:
    'web developer, frontend engineer, React developer, Next.js, portfolio',
  openGraph: {
    title: 'Your Name | Professional Developer',
    description: 'Full-stack developer specializing in modern web applications',
    url: 'https://yourwebsite.com',
    siteName: 'Your Portfolio',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

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
    <div className='min-h-screen bg-black text-white font-[family-name:var(--font-geist-sans)]'>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800'
      >
        <div className='max-w-6xl mx-auto px-6 sm:px-8 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
          {/* Logo/Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='font-[family-name:var(--font-geist-mono)] font-bold text-lg'
          >
            <span className='text-white'>mikkelraev</span>
            <span className='text-fuchsia-500'>.</span>
            <span className='text-gray-400'>dk</span>
          </motion.div>

          {/* Desktop Navigation */}
          {/* <div className='hidden md:flex items-center gap-8'>
            <NavLink href='#home'>Home</NavLink>
            <NavLink href='#work'>Work</NavLink>
            <NavLink href='#contact'>Contact</NavLink>
          </div> */}

          {/* Mobile Menu Button */}
          {/* <motion.button
            whileTap={{ scale: 0.95 }}
            className='md:hidden text-white'
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label='Toggle menu'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='3' y1='12' x2='21' y2='12'></line>
              <line x1='3' y1='6' x2='21' y2='6'></line>
              <line x1='3' y1='18' x2='21' y2='18'></line>
            </svg>
          </motion.button> */}

          {/* Mobile Menu */}
          {/* {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='absolute top-full left-0 right-0 bg-zinc-900 border-b border-zinc-800 md:hidden'
            >
              <div className='flex flex-col p-4 gap-4'>
                <MobileNavLink
                  href='#home'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </MobileNavLink>
                <MobileNavLink
                  href='#work'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Work
                </MobileNavLink>
                <MobileNavLink
                  href='#contact'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </MobileNavLink>
              </div>
            </motion.div>
          )} */}
        </div>
      </motion.header>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='px-6 sm:px-8 md:px-16 lg:px-24 py-20 md:py-32'
      >
        <div className='max-w-6xl mx-auto'>
          {/* Background gradient element */}
          <div className='absolute top-0 right-0 -z-10 overflow-hidden'>
            <div className='w-[500px] h-[500px] rounded-full bg-fuchsia-600/20 blur-[120px]' />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className='text-5xl md:text-7xl font-bold mb-6'
          >
            Creative{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-fuchsia-400'>
              Developer
            </span>
            <span className='text-fuchsia-500'>.</span>
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
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 15px rgba(217, 70, 239, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
              className='bg-gradient-to-r from-fuchsia-600 to-fuchsia-500 text-white rounded-md px-8 py-3 font-medium transition-all duration-300'
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(217, 70, 239, 0.1)',
              }}
              whileTap={{ scale: 0.95 }}
              className='bg-transparent border border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-900/20 rounded-md px-8 py-3 font-medium transition-colors'
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Bento Grid Section */}
      <section className='px-6 sm:px-8 md:px-16 lg:px-24 py-24 '>
        <div className='max-w-6xl mx-auto'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-3xl md:text-4xl font-bold mb-12 text-center'
          >
            My Work<span className='text-fuchsia-500'>.</span>
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
              whileHover={{
                y: -5,
                boxShadow: '0 15px 30px -10px rgba(217, 70, 239, 0.15)',
              }}
              className='md:col-span-2 md:row-span-2 bg-zinc-900/80 backdrop-blur-md rounded-xl p-6 overflow-hidden group relative border border-zinc-800/50'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              {/* Glass morphism effect */}
              <div className='h-48 md:h-64 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-md rounded-lg mb-4 overflow-hidden border border-zinc-700/30'>
                <div className='w-full h-full bg-gradient-to-br from-fuchsia-600/30 to-blue-600/30 flex items-end p-6'>
                  <div className='bg-black/30 backdrop-blur-md px-4 py-2 rounded-lg inline-flex items-center gap-2'>
                    <span className='w-2 h-2 rounded-full bg-fuchsia-500'></span>
                    <span className='text-sm font-medium'>Featured</span>
                  </div>
                </div>
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
              <div className='absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
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
              <div className='absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              <div className='h-32 bg-zinc-800 rounded-lg mb-4 overflow-hidden'>
                <div className='w-full h-full bg-gradient-to-br from-pink-600/40 to-fuchsia-600/40'></div>
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
              <div className='absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
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

      {/* About Me Section */}
      <section className='px-6 sm:px-8 md:px-16 lg:px-24 py-24 bg-zinc-950 relative'>
        <div className='absolute bottom-0 left-0 -z-10 overflow-hidden'>
          <div className='w-[600px] h-[600px] rounded-full bg-fuchsia-950/30 blur-[150px]' />
        </div>
        <div className='max-w-6xl mx-auto'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-3xl md:text-4xl font-bold mb-8 text-center'
          >
            About{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-fuchsia-400'>
              Me
            </span>
          </motion.h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className='aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-fuchsia-500/30 to-indigo-600/30'>
                <div className='absolute inset-2 bg-zinc-900 rounded-xl overflow-hidden'>
                  {/* Replace with your image */}
                  <div className='w-full h-full bg-gradient-to-br from-fuchsia-600/40 to-indigo-600/40 flex items-center justify-center'>
                    <span className='text-6xl'>👨‍💻</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='flex flex-col gap-6'
            >
              <h3 className='text-2xl font-bold'>Full Stack Developer</h3>
              <p className='text-gray-300'>
                I'm a passionate developer with expertise in building modern web
                applications. With 5+ years of experience, I specialize in
                crafting responsive, user-friendly interfaces with a focus on
                performance and accessibility.
              </p>

              <div className='mt-4'>
                <h4 className='text-xl font-medium mb-4'>My Skills</h4>
                <motion.div
                  className='flex flex-wrap gap-3'
                  variants={container}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                >
                  {[
                    'React',
                    'Next.js',
                    'TypeScript',
                    'Tailwind CSS',
                    'Framer Motion',
                    'Node.js',
                    'GraphQL',
                    'Jest',
                  ].map((skill, i) => (
                    <motion.span
                      key={skill}
                      variants={item}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: 'rgba(217, 70, 239, 0.2)',
                      }}
                      className='px-4 py-2 bg-zinc-800/70 backdrop-blur-sm rounded-full text-sm font-medium border border-zinc-700/30 hover:border-fuchsia-500/50 transition-all duration-300'
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className='px-6 sm:px-8 md:px-16 lg:px-24 py-24'>
        <div className='max-w-4xl mx-auto'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-3xl md:text-4xl font-bold mb-16 text-center'
          >
            My <span className='text-fuchsia-500'>Journey</span>
          </motion.h2>

          <div className='relative'>
            {/* Timeline Line */}
            <div className='absolute left-0 md:left-1/2 h-full w-px bg-gradient-to-b from-transparent via-fuchsia-500/40 to-transparent transform md:translate-x-[-0.5px]'></div>

            {/* Timeline Items */}
            {[
              {
                year: '2023 - Present',
                role: 'Senior Developer',
                company: 'Tech Innovators',
                description:
                  'Leading development of next-generation web applications.',
              },
              {
                year: '2020 - 2023',
                role: 'Full Stack Developer',
                company: 'Digital Solutions Inc.',
                description:
                  'Developed robust backend services and responsive frontends.',
              },
              {
                year: '2018 - 2020',
                role: 'Frontend Developer',
                company: 'Creative Web Agency',
                description:
                  'Created engaging user interfaces and interactive experiences.',
              },
            ].map((experience, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 last:mb-0 ${
                  i % 2 === 0 ? 'md:justify-end' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className='absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 border-4 border-zinc-900 transform translate-x-[-10px] md:translate-x-[-12px] shadow-[0_0_10px_rgba(217,70,239,0.5)]'></div>
                {/* Content */}
                <div
                  className={`w-full md:w-[calc(50%-20px)] p-6 bg-zinc-900 rounded-xl border border-zinc-800 ${
                    i % 2 === 0 ? 'md:text-right' : ''
                  }`}
                >
                  <div className='inline-block px-3 py-1 mb-3 bg-fuchsia-900/30 rounded-full text-fuchsia-400 text-sm font-medium'>
                    {experience.year}
                  </div>
                  <h3 className='text-xl font-bold'>{experience.role}</h3>
                  <h4 className='text-gray-400 mb-3'>{experience.company}</h4>
                  <p className='text-gray-300'>{experience.description}</p>
                </div>

                {/* Spacer for alternate layout */}
                {i % 2 === 1 && (
                  <div className='hidden md:block w-[calc(50%-20px)]'></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='px-6 sm:px-8 md:px-16 lg:px-24 py-24 relative'>
        {/* Background accent */}
        <div className='absolute top-20 right-0 -z-10 overflow-hidden opacity-30'>
          <div className='w-[400px] h-[400px] rounded-full bg-fuchsia-700/30 blur-[120px]' />
        </div>

        <div className='max-w-6xl mx-auto'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-3xl md:text-4xl font-bold mb-16 text-center'
          >
            What I{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-fuchsia-400'>
              Do
            </span>
          </motion.h2>

          <motion.div
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          >
            {[
              {
                icon: '💻',
                title: 'Web Development',
                gradient: 'from-fuchsia-600/20 to-indigo-600/20',
                description:
                  'Custom websites and web applications built with modern technologies and best practices.',
              },
              {
                icon: '🎨',
                title: 'UI/UX Design',
                gradient: 'from-indigo-600/20 to-blue-600/20',
                description:
                  'Intuitive and engaging user interfaces with a focus on user experience and accessibility.',
              },
              {
                icon: '📱',
                title: 'Responsive Design',
                gradient: 'from-blue-600/20 to-cyan-600/20',
                description:
                  'Websites that look and work perfectly on all devices, from desktop to mobile.',
              },
              {
                icon: '⚡',
                title: 'Performance Optimization',
                gradient: 'from-cyan-600/20 to-emerald-600/20',
                description:
                  'Improving speed and efficiency of existing websites and applications.',
              },
              {
                icon: '🔒',
                title: 'Secure Development',
                gradient: 'from-emerald-600/20 to-yellow-600/20',
                description:
                  'Implementation of security best practices to protect your data and users.',
              },
              {
                icon: '🔍',
                title: 'SEO Optimization',
                gradient: 'from-yellow-600/20 to-fuchsia-600/20',
                description:
                  'Helping your website rank higher in search engine results.',
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{
                  y: -8,
                  boxShadow: '0 15px 30px -10px rgba(217, 70, 239, 0.15)',
                  scale: 1.02,
                }}
                className='bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/60 rounded-xl p-6 flex flex-col h-full transition-all duration-300 group relative overflow-hidden'
              >
                {/* Gradient background that appears on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500`}
                ></div>

                {/* Icon container with animated background */}
                <div className='relative mb-6 w-14 h-14 rounded-lg flex items-center justify-center bg-zinc-800/70 border border-zinc-700/30 overflow-hidden group-hover:border-fuchsia-500/30 transition-colors duration-300'>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-40`}
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: 'easeInOut',
                    }}
                  />
                  <span className='text-4xl relative z-10'>{service.icon}</span>
                </div>

                <h3 className='text-xl font-bold mb-3'>{service.title}</h3>
                <p className='text-gray-400 group-hover:text-gray-300 transition-colors duration-300'>
                  {service.description}
                </p>

                {/* Bottom accent line that animates on hover */}
                <motion.div
                  className='h-0.5 w-0 bg-gradient-to-r from-fuchsia-500 to-fuchsia-400 rounded-full mt-auto pt-2'
                  initial={{ width: 0 }}
                  whileInView={{ width: '30%' }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* Testimonials Section */}
      <section className='px-6 sm:px-8 md:px-16 lg:px-24 py-24 bg-zinc-950 relative overflow-hidden'>
        {/* Background elements */}
        <div className='absolute top-10 left-0 -z-10 overflow-hidden opacity-60'>
          <div className='w-[500px] h-[500px] rounded-full bg-fuchsia-900/20 blur-[160px]' />
        </div>
        <motion.div
          className='absolute -bottom-64 right-0 w-80 h-80 bg-fuchsia-800/10 rounded-full blur-[100px] z-0'
          animate={{
            x: [0, 50, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        <div className='max-w-6xl mx-auto relative'>
          {/* Quote mark decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.03, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='absolute -top-20 left-1/2 transform -translate-x-1/2 text-[400px] font-serif text-fuchsia-500'
          >
            "
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-3xl md:text-4xl font-bold mb-20 text-center'
          >
            Client{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-fuchsia-400'>
              Testimonials
            </span>
          </motion.h2>

          <motion.div
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12'
          >
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO, TechStart',
                image: '/testimonial1.jpg',
                text: 'Working with this developer was an absolute pleasure. They delivered exactly what we needed, on time and with excellent quality. I highly recommend their services.',
                color: 'fuchsia',
              },
              {
                name: 'Michael Chen',
                role: 'Product Manager, InnovateLabs',
                image: '/testimonial2.jpg',
                text: 'The attention to detail and technical expertise was impressive. Our project required complex solutions and they navigated every challenge effectively.',
                color: 'indigo',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Creative Director, DesignWorks',
                image: '/testimonial3.jpg',
                text: "Not only is the code clean and well-structured, but the design implementation was flawless. It's rare to find someone skilled in both areas.",
                color: 'blue',
              },
              {
                name: 'David Kim',
                role: 'Founder, NextLevel',
                image: '/testimonial4.jpg',
                text: "The developer went above and beyond our expectations. They suggested improvements we hadn't considered and delivered a product that exceeded our requirements.",
                color: 'cyan',
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{
                  y: -5,
                  boxShadow: `0 15px 30px -10px rgba(217, 70, 239, 0.${
                    i % 2 === 0 ? '2' : '1'
                  })`,
                }}
                className='bg-zinc-900/90 backdrop-blur-sm p-7 rounded-xl border border-zinc-800/80 relative group'
              >
                {/* Decorative quote mark */}
                <div className='absolute -right-3 -top-3 text-4xl text-fuchsia-500/20 font-serif group-hover:text-fuchsia-500/30 transition-all duration-500'>
                  "
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className='absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent'
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                />

                {/* Testimonial text */}
                <p className='text-gray-300 italic mb-6 leading-relaxed'>
                  "{testimonial.text}"
                </p>

                {/* Author info with enhanced avatar */}
                <div className='flex items-center gap-4'>
                  <div className='relative'>
                    <div
                      className={`w-12 h-12 rounded-full overflow-hidden bg-${testimonial.color}-800 flex items-center justify-center text-xl font-bold ring-2 ring-${testimonial.color}-500/30 ring-offset-1 ring-offset-zinc-900`}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <motion.div
                      className={`absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-500/40 to-${testimonial.color}-500/40 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                      animate={{ scale: [0.9, 1.1, 0.9] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  </div>
                  <div>
                    <h3 className='font-bold text-white'>{testimonial.name}</h3>
                    <p className='text-sm text-gray-400'>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              className='text-gray-400 hover:text-fuchsia-500 transition-colors'
            >
              GitHub
            </a>
            <a
              href='#'
              className='text-gray-400 hover:text-fuchsia-500 transition-colors'
            >
              LinkedIn
            </a>
            <a
              href='#'
              className='text-gray-400 hover:text-fuchsia-500 transition-colors'
            >
              Twitter
            </a>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
