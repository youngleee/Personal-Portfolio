import Image from 'next/image'
import { Metadata } from 'next'
import HeaderSection from '@/components/HeaderSection'
import IntroSection from '@/components/IntroSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import FooterSection from '@/components/FooterSection'

export const metadata: Metadata = {
  title: 'Personal Portfolio | Home',
  description: 'My personal portfolio showcasing my skills, projects, and contact information',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeaderSection />
      
      <div className="container mx-auto px-4 py-8">
        <IntroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      
      <FooterSection />
    </main>
  )
} 