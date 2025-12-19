 'use client'

import { useState, useEffect } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Code2,
  Database,
  Server,
  GitBranch,
  Cloud,
  Layers,
  GraduationCap,
  Briefcase,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'

// Navigation Component with CV Download
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDownloadCV = () => {
    // Open CV in new tab
    window.open('/cv.pdf', '_blank')
  }

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-900/90 backdrop-blur-xl border-b border-white/5' : 'bg-dark-900/20'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="font-display font-bold text-xl">
            <span className="gradient-text">ARK</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all group-hover:w-full" />
              </a>
            ))}
            
            {/* CV Download Button */}
            <button
              onClick={handleDownloadCV}
              className="text-sm px-4 py-2 bg-accent-primary text-dark-900 font-semibold rounded-full hover:shadow-lg hover:shadow-accent-primary/25 transition-all hover:-translate-y-0.5"
            >
              Download CV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-dark-900/95 backdrop-blur-xl border-b border-white/5 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-6 py-3 text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {/* Mobile CV Download Button */}
            <button
              onClick={() => {
                handleDownloadCV()
                setIsMobileMenuOpen(false)
              }}
              className="block w-full text-left px-6 py-3 text-accent-primary hover:bg-accent-primary/10 transition-colors"
            >
              Download CV
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Animated Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-sm text-gray-400">Available for opportunities</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="block text-white">Abdulrehman</span>
            <span className="block gradient-text glow-text">Khan</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-4 font-light">
            Full Stack Developer
          </p>
          
          <p className="max-w-2xl mx-auto text-gray-500 mb-12 leading-relaxed">
            Building scalable, high-performance web applications with modern technologies.
            Specializing in Laravel, Next.js, and cloud architecture.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="#contact"
              className="px-8 py-4 bg-accent-primary text-dark-900 font-semibold rounded-full hover:shadow-lg hover:shadow-accent-primary/25 transition-all hover:-translate-y-1"
            >
              Get in Touch
            </a>
            <a 
              href="#projects"
              className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/5 transition-all hover:-translate-y-1"
            >
              View Projects
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-500" size={32} />
        </div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent-primary font-mono text-sm mb-4 block">01 / ABOUT</span>
            <h2 className="section-title text-white mb-6">
              Crafting Digital<br />
              <span className="gradient-text">Experiences</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                A passionate Full Stack Developer with hands-on experience in building 
                high-quality web applications. I thrive in collaborative, fast-paced 
                environments and have contributed to production-ready software using 
                modern development stacks.
              </p>
              <p>
                My expertise spans across frontend and backend development, with a strong 
                focus on scalability, performance optimization, and exceptional user 
                experiences. I believe in clean code, agile workflows, and continuous learning.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-12">
              {[
                { number: '10+', label: 'Projects Delivered' },
                { number: '3+', label: 'Years Experience' },
                { number: '100%', label: 'Client Satisfaction' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-display font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="gradient-border p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent-primary/10">
                    <Briefcase className="text-accent-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Full Stack Development</h3>
                    <p className="text-sm text-gray-500">End-to-end application development with modern frameworks</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent-secondary/10">
                    <Layers className="text-accent-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">System Architecture</h3>
                    <p className="text-sm text-gray-500">Designing scalable and maintainable software systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent-tertiary/10">
                    <Cloud className="text-accent-tertiary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Cloud Deployment</h3>
                    <p className="text-sm text-gray-500">Docker containerization and cloud infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Skills Section
function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      color: 'accent-primary',
      skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'React', 'Blade', 'Livewire', 'Next.js']
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'accent-secondary',
      skills: ['PHP', 'Laravel', 'Filament', 'Python', 'FastAPI', 'NestJS', 'REST APIs']
    },
    {
      title: 'Database',
      icon: Database,
      color: 'accent-tertiary',
      skills: ['MySQL', 'PostgreSQL', 'ProxySQL']
    },
    {
      title: 'DevOps & Tools',
      icon: GitBranch,
      color: 'accent-primary',
      skills: ['Git', 'GitHub','GitHub Actions','Docker', 'cPanel', 'CI/CD', 'VPS Deployment', 'Shell/Bash']
    },
    {
      title: 'Integrations',
      icon: Layers,
      color: 'accent-secondary',
      skills: ['Stripe', 'OAuth', 'Third-party APIs']
    }
  ]

  return (
    <section id="skills" className="py-32 bg-dark-900 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent-primary font-mono text-sm mb-4 block">02 / SKILLS</span>
          <h2 className="section-title text-white">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            A comprehensive toolkit built through years of hands-on experience 
            in developing production-ready applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <div key={i} className="gradient-border p-6 hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-${category.color}/10`}>
                  <category.icon className={`text-${category.color}`} size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span key={j} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      title: 'UHS Admission Portal',
      subtitle: 'University of Health Sciences',
      description: 'A comprehensive web-based admission portal streamlining the student application process. Students can register, submit, and manage their applications through a secure, user-friendly interface.',
      technologies: ['Laravel', 'Livewire', 'Filament', 'MySQL'],
      role: 'Full Stack Developer',
      team: '4 Developers',
      highlights: [
        'Secure student registration system',
        'Dynamic application forms',
        'Intuitive admin dashboard',
        'Scalable architecture'
      ]
    },
    {
      title: 'NexGen CC',
      subtitle: 'Customer Support Ticketing System',
      description: 'A SaaS-ready customer support system enabling real-time query management with email integration and automated ticket creation.',
      technologies: ['Laravel', 'MySQL', 'ProxySQL', 'Next.js', 'FastAPI'],
      role: 'Lead Developer',
      highlights: [
        'Email-based ticket automation',
        'Role-based access controls',
        'Internal team messaging',
        'Threaded conversations'
      ]
    },
    {
      title: 'Call Center Dialer',
      subtitle: 'High-Performance Dialing System',
      description: 'A robust call center application designed to handle large volumes of concurrent API requests while maintaining system stability.',
      technologies: ['Laravel', 'ProxySQL', 'MySQL'],
      role: 'Backend Developer',
      highlights: [
        'High concurrency handling',
        'Connection pooling',
        'Performance optimized',
        'Table lock prevention'
      ]
    }
    ,
    {
      title: 'Nable',
      subtitle: 'Medical Legacy System (Core PHP)',
      description: 'Maintained and modernized a legacy medical records and billing system written in core PHP. Fixed critical bugs across modules and implemented a Stripe payment integration — including building a centralized payment flow (charge creation, webhooks, idempotency, and retry/reconciliation) — to streamline online payments and improve reliability.',
  technologies: ['PHP', 'Core PHP', 'Stripe', 'PostgreSQL'],
      role: 'Maintenance & Integration Engineer',
      team: '2 Developers',
      highlights: [
        'Integrated Stripe for secure online payments and developed centralized payment flows',
        'Implemented idempotency keys and secure webhook handling',
        'Added retry and reconciliation logic for failed payments',
        'Resolved critical data synchronization and billing bugs',
        'Improved checkout UX and robust error handling',
        'Maintained backward compatibility with legacy modules'
      ]
    }
  ]

  return (
    <section id="projects" className="py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent-primary font-mono text-sm mb-4 block">03 / PROJECTS</span>
          <h2 className="section-title text-white">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Production-ready applications built with scalability, 
            performance, and user experience in mind.
          </p>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-accent-primary font-mono text-sm">0{i + 1}</span>
                    <span className="w-8 h-px bg-accent-primary/50" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-accent-secondary text-sm mb-4">{project.subtitle}</p>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, j) => (
                      <span 
                        key={j}
                        className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span>Role: <span className="text-white">{project.role}</span></span>
                    {project.team && (
                      <span>Team: <span className="text-white">{project.team}</span></span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Key Features
                  </h4>
                  {project.highlights.map((highlight, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Education Section
function EducationSection() {
  const education = [
    {
      degree: "Bachelor's in Information Technology",
      institution: 'PUCIT (Punjab University College of Information Technology)',
      period: '2019 - 2023',
      icon: GraduationCap
    },
    {
      degree: 'Intermediate',
      institution: 'Punjab College',
      period: '2017 - 2019',
      icon: GraduationCap
    }
  ]

  return (
    <section id="education" className="py-32 bg-dark-900 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-accent-primary font-mono text-sm mb-4 block">04 / EDUCATION</span>
            <h2 className="section-title text-white mb-6">
              Academic <span className="gradient-text">Background</span>
            </h2>
            <p className="text-gray-500 leading-relaxed">
              A strong foundation in Information Technology combined with continuous 
              learning and hands-on project experience.
            </p>
          </div>
          
          <div className="space-y-0">
            {education.map((edu, i) => (
              <div key={i} className="timeline-item">
                <div className="gradient-border p-6">
                  <span className="text-accent-primary font-mono text-sm">{edu.period}</span>
                  <h3 className="font-display text-xl font-semibold text-white mt-2 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-400 text-sm">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Interests */}
        <div className="mt-20 pt-16 border-t border-white/5">
          <h3 className="text-center font-display text-xl text-white mb-8">Beyond the Code</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['🌍 Traveling', '💪 Gym', '🏏 Cricket', '📸 Photography'].map((interest, i) => (
              <span key={i} className="skill-badge text-base">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section - Fixed with clickable buttons
function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-accent-primary font-mono text-sm mb-4 block">05 / CONTACT</span>
            <h2 className="section-title text-white mb-6">
              Let's Build<br />
              <span className="gradient-text">Something Great</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm currently open to new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:Abdulrehmankhan1010589@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02] group"
                onClick={(e) => e.stopPropagation()}
              >
                <Mail size={24} className="text-accent-primary" />
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-white">Abdulrehmankhan1010589@gmail.com</div>
                </div>
              </a>
              
              <a 
                href="tel:+923071010589"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02] group"
                onClick={(e) => e.stopPropagation()}
              >
                <Phone size={24} className="text-accent-primary" />
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <div className="text-white">+92 307 1010589</div>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <MapPin size={24} className="text-accent-primary" />
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="text-white">Lahore, Pakistan</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="border border-accent-primary/30 rounded-xl p-8 text-center bg-gradient-to-br from-dark-900 to-dark-800">
              <h3 className="font-display text-2xl font-semibold text-white mb-4">
                Ready to collaborate?
              </h3>
              <p className="text-gray-400 mb-8">
                Let's discuss your next project and bring your ideas to life.
              </p>
              
              {/* FIXED: Send Message Button - Make sure this is clickable */}
              <div className="mb-8">
                <a 
                  href="mailto:Abdulrehmankhan1010589@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Abdulrehman,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent-primary text-dark-900 font-semibold rounded-full hover:shadow-lg hover:shadow-accent-primary/25 transition-all hover:-translate-y-1 active:scale-95 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "mailto:Abdulrehmankhan1010589@gmail.com?subject=Portfolio Inquiry&body=Hello Abdulrehman,\n\nI saw your portfolio and would like to connect.";
                  }}
                  style={{ display: 'inline-flex', cursor: 'pointer' }}
                >
                  <span>Send Message</span>
                  <ExternalLink size={18} />
                </a>
              </div>
              
              <p className="text-sm text-gray-500 mb-6">Connect with me on</p>
              
              <div className="flex justify-center gap-6">
                {/* GitHub Button - FIXED
                <a 
                  href="https://github.com/Abdulrehman4254" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-accent-primary hover:bg-accent-primary/10 transition-all hover:scale-110 active:scale-95 cursor-pointer group"
                  onClick={(e) => e.stopPropagation()}
                  style={{ cursor: 'pointer' }}
                  title="View my GitHub profile"
                >
                  <Github size={22} className="text-white group-hover:text-accent-primary transition-colors" />
                  <span className="sr-only">GitHub</span>
                </a> */}
                
                {/* LinkedIn Button - FIXED */}
                <a 
                  href="https://www.linkedin.com/in/abdulrehman-khan-/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-accent-primary hover:bg-accent-primary/10 transition-all hover:scale-110 active:scale-95 cursor-pointer group"
                  onClick={(e) => e.stopPropagation()}
                  style={{ cursor: 'pointer' }}
                  title="View my LinkedIn profile"
                >
                  <Linkedin size={22} className="text-white group-hover:text-accent-primary transition-colors" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></span>
                  Available for opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-8 bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-bold text-xl">
            <span className="gradient-text">ARK</span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Abdulrehman Khan. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
