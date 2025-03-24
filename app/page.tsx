"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { ArrowDown, Github, Mail, Linkedin, Instagram, FileDown, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { SocialIcon } from "@/components/social-icon"
import { SkillCard } from "@/components/skill-card"
import { ProjectCarousel } from "@/components/project-carousel"

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Frontend skills
  const frontendSkills = [
    { name: "HTML5", icon: "html5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS3", icon: "css3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: "typescript", url: "https://www.typescriptlang.org/" },
    { name: "React", icon: "react", url: "https://reactjs.org/" },
    { name: "Next.js", icon: "nextjs", url: "https://nextjs.org/" },
    { name: "Bootstrap", icon: "bootstrap", url: "https://getbootstrap.com/" },
    { name: "Sass", icon: "sass", url: "https://sass-lang.com/" },
    { name: "Tailwind CSS", icon: "tailwind", url: "https://tailwindcss.com/" },
    { name: "jQuery", icon: "jquery", url: "https://jquery.com/" },
    { name: "Redux", icon: "redux", url: "https://redux.js.org/" },
    { name: "Express.js", icon: "express", url: "https://expressjs.com/" },
  ]

  // Backend & DevOps skills
  const backendSkills = [
    { name: "Node.js", icon: "nodejs", url: "https://nodejs.org/" },
    { name: "Python", icon: "python", url: "https://www.python.org/" },
    { name: "Django", icon: "django", url: "https://www.djangoproject.com/" },
    { name: "MongoDB", icon: "mongodb", url: "https://www.mongodb.com/" },
    { name: "GraphQL", icon: "graphql", url: "https://graphql.org/" },
    { name: "Docker", icon: "docker", url: "https://www.docker.com/" },
    { name: "AWS", icon: "aws", url: "https://aws.amazon.com/" },
    { name: "Google Cloud", icon: "gcp", url: "https://cloud.google.com/" },
    { name: "Azure", icon: "azure", url: "https://azure.microsoft.com/" },
    { name: "Nginx", icon: "nginx", url: "https://www.nginx.com/" },
    { name: "Firebase", icon: "firebase", url: "https://firebase.google.com/" },
  ]

  // Tools & Others
  const toolsSkills = [
    { name: "Git", icon: "git", url: "https://git-scm.com/" },
    { name: "GitHub", icon: "github", url: "https://github.com/" },
    { name: "VS Code", icon: "vscode", url: "https://code.visualstudio.com/" },
    { name: "Postman", icon: "postman", url: "https://www.postman.com/" },
    { name: "Linux", icon: "linux", url: "https://www.linux.org/" },
    { name: "Figma", icon: "figma", url: "https://www.figma.com/" },
    { name: "Photoshop", icon: "photoshop", url: "https://www.adobe.com/products/photoshop.html" },
    { name: "Notion", icon: "notion", url: "https://www.notion.so/" },
    { name: "Webpack", icon: "webpack", url: "https://webpack.js.org/" },
    { name: "Babel", icon: "babel", url: "https://babeljs.io/" },
    { name: "Kubernetes", icon: "kubernetes", url: "https://kubernetes.io/" },
  ]

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with payment integration, user authentication, and product management",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Node.js", "MongoDB", "Express.js", "Redux"],
      demoLink: "#",
      codeLink: "https://github.com/MuhammadKarimov-dev",
    },
    {
      title: "Task Management App",
      description:
        "A responsive task management application with drag-and-drop functionality and team collaboration features",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      demoLink: "#",
      codeLink: "https://github.com/MuhammadKarimov-dev",
    },
    {
      title: "Educational Platform",
      description: "An interactive learning platform with video courses, quizzes, and progress tracking",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Django", "PostgreSQL", "AWS"],
      demoLink: "#",
      codeLink: "https://github.com/MuhammadKarimov-dev",
    },
    {
      title: "Personal Blog",
      description: "A modern blog platform with markdown support, categories, and search functionality",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
      demoLink: "#",
      codeLink: "https://github.com/MuhammadKarimov-dev",
    },
    {
      title: "Weather App",
      description: "A weather application with location detection, forecasts, and interactive maps",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "OpenWeather API", "Leaflet", "Styled Components"],
      demoLink: "#",
      codeLink: "https://github.com/MuhammadKarimov-dev",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50" style={{ scaleX: scrollYProgress }} />

      {/* Header with theme toggle */}
      <header className="fixed top-0 right-0 p-4 z-40">
        <ThemeToggle />
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-6">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <ParticleBackground />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Muhammad Karimov</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Frontend Developer | IT Educator | Tech Enthusiast
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <SocialIcon href="https://www.linkedin.com/in/muhammad-karimovdev/" icon={<Linkedin />} label="LinkedIn" />
            <SocialIcon href="https://github.com/MuhammadKarimov-dev" icon={<Github />} label="GitHub" />
            <SocialIcon href="https://t.me/MuhammadKarimovDev" icon={<Mail />} label="Telegram" />
            <SocialIcon href="https://www.instagram.com/muhammadlink.dev/" icon={<Instagram />} label="Instagram" />
          </div>

          {/* Resume Download Button */}
          <div className="mb-8">
            <Button variant="default" size="lg" className="group animate-pulse hover:animate-none" asChild>
              <a href="/resume/muhammad-karimov-resume.pdf" download>
                <FileDown className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
          </div>

          <Button onClick={scrollToAbout} size="lg" className="group">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
          </Button>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section ref={aboutRef} className="py-20 px-6 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="space-y-4">
            <p className="text-lg">
              I'm a passionate Frontend Developer and IT Educator based in Andijon, Uzbekistan. I specialize in creating
              clean, responsive, and user-friendly web applications that deliver exceptional user experiences.
            </p>
            <p className="text-lg">
              With expertise in modern frontend technologies like React, Next.js, and TypeScript, I build scalable and
              maintainable web applications. I'm also passionate about sharing my knowledge and mentoring others in the
              tech community.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying anime. I'm a lifelong learner always looking to expand my skills and knowledge.
            </p>

            {/* Resume Link in About Section */}
            <div className="pt-4 flex justify-center">
              <Button variant="outline" size="lg" className="group" asChild>
                <a href="/resume/muhammad-karimov-resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  View Full Resume
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Skills & Technologies
          </motion.h2>

          {/* Frontend Skills */}
          <div className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl font-semibold mb-6 text-primary"
            >
              Frontend Development
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {frontendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl font-semibold mb-6 text-primary"
            >
              Backend & DevOps
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {backendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Tools & Others */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl font-semibold mb-6 text-primary"
            >
              Tools & Others
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {toolsSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Carousel */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Projects
          </motion.h2>

          <ProjectCarousel projects={projects} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <a href="mailto:your.email@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <a href="https://github.com/MuhammadKarimov-dev" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <a href="https://www.linkedin.com/in/muhammad-karimovdev/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <a href="https://t.me/MuhammadKarimovDev" target="_blank" rel="noopener noreferrer">
                <Mail className="mr-2 h-5 w-5" />
                Telegram
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <a href="https://www.instagram.com/muhammadlink.dev/" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 text-center text-sm text-muted-foreground border-t">
        <p>© {new Date().getFullYear()} Muhammad Karimov. All rights reserved.</p>
      </footer>
    </main>
  )
}

// Particle Background Component
function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative w-full h-full">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20 animate-float"
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

