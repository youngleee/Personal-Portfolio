"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Define project interface
interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image: string
  link: string
  github: string
}

export default function ProjectsSection() {
  // Example projects data - replace with your own projects
  const projects: Project[] = [
    {
      id: "project-1",
      title: "AI Research Assistant",
      description: "A machine learning powered research assistant that helps academics find relevant papers and summarize research findings.",
      tags: ["React", "Python", "TensorFlow", "NLP"],
      image: "/projects/project1.jpg",
      link: "https://project1.example.com",
      github: "https://github.com/yourusername/project1",
    },
    {
      id: "project-2",
      title: "Distributed Systems Simulator",
      description: "An educational tool that visualizes distributed algorithms and consensus protocols in action.",
      tags: ["TypeScript", "D3.js", "Node.js", "WebSockets"],
      image: "/projects/project2.jpg",
      link: "https://project2.example.com",
      github: "https://github.com/yourusername/project2",
    },
    {
      id: "project-3",
      title: "Smart Campus Navigation",
      description: "A mobile app that helps students navigate university campuses with real-time indoor positioning.",
      tags: ["React Native", "GraphQL", "MongoDB", "AWS"],
      image: "/projects/project3.jpg",
      link: "https://project3.example.com",
      github: "https://github.com/yourusername/project3",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Projects</h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and interests.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-lg border bg-card text-card-foreground shadow overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <div className="flex items-center justify-center h-full bg-secondary text-muted-foreground">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium inline-flex items-center justify-center rounded-md text-primary underline-offset-4 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground shadow hover:bg-primary/90"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 