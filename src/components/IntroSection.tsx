"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function IntroSection() {
  return (
    <section 
      id="about" 
      className="py-20 md:py-28 flex flex-col md:flex-row items-center gap-10"
    >
      <motion.div 
        className="flex-1" 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          Hello, I'm{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Your Name
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
          CS Masters Student
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-[600px]">
          I'm passionate about creating innovative solutions through software engineering. Currently pursuing my Masters in Computer Science, focusing on [your specialization]. I love tackling complex problems and building applications that make a difference.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="#contact" 
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Contact Me
          </a>
          <a 
            href="#projects" 
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            View Projects
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-r from-blue-500 to-teal-400 p-1">
          <div className="absolute inset-1 rounded-full overflow-hidden bg-background flex items-center justify-center">
            {/* Replace with your profile image */}
            <div className="relative w-full h-full">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Your Photo
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 