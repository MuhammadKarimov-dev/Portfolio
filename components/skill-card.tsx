"use client"

import { motion } from "framer-motion"
import {
  Heading5Icon as Html5,
  CodepenIcon as Css3,
  FileJson,
  Blocks,
  Atom,
  LayoutGrid,
  Palette,
  Wind,
  Infinity,
  Repeat,
  Server,
  FileCode2,
  PiIcon as Python,
  Database,
  GitBranch,
  Github,
  Code2,
  Terminal,
  PenTool,
  Image,
  FileText,
  Package,
  Layers,
  Cloud,
  BarChart,
  Flame,
  Workflow,
  Boxes,
} from "lucide-react"
import type { ReactNode } from "react"

interface SkillCardProps {
  skill: {
    name: string
    icon: string
    url: string
  }
  index: number
}

export function SkillCard({ skill, index }: SkillCardProps) {
  // Map skill names to Lucide icons
  const getSkillIcon = (iconName: string): ReactNode => {
    const iconMap: Record<string, ReactNode> = {
      // Frontend
      html5: <Html5 className="w-8 h-8 text-[#E34F26]" />,
      css3: <Css3 className="w-8 h-8 text-[#1572B6]" />,
      javascript: <FileJson className="w-8 h-8 text-[#F7DF1E]" />,
      typescript: <FileCode2 className="w-8 h-8 text-[#3178C6]" />,
      react: <Atom className="w-8 h-8 text-[#61DAFB]" />,
      nextjs: <Blocks className="w-8 h-8" />,
      bootstrap: <Boxes className="w-8 h-8 text-[#7952B3]" />,
      sass: <Palette className="w-8 h-8 text-[#CC6699]" />,
      tailwind: <Wind className="w-8 h-8 text-[#06B6D4]" />,
      jquery: <Infinity className="w-8 h-8 text-[#0769AD]" />,
      redux: <Repeat className="w-8 h-8 text-[#764ABC]" />,
      express: <Server className="w-8 h-8" />,

      // Backend & DevOps
      nodejs: <Server className="w-8 h-8 text-[#339933]" />,
      python: <Python className="w-8 h-8 text-[#3776AB]" />,
      django: <LayoutGrid className="w-8 h-8 text-[#092E20]" />,
      mongodb: <Database className="w-8 h-8 text-[#47A248]" />,
      graphql: <Workflow className="w-8 h-8 text-[#E10098]" />,
      docker: <Boxes className="w-8 h-8 text-[#2496ED]" />,
      aws: <Cloud className="w-8 h-8 text-[#FF9900]" />,
      gcp: <Cloud className="w-8 h-8 text-[#4285F4]" />,
      azure: <Cloud className="w-8 h-8 text-[#0078D4]" />,
      nginx: <Server className="w-8 h-8 text-[#009639]" />,
      firebase: <Flame className="w-8 h-8 text-[#FFCA28]" />,

      // Tools & Others
      git: <GitBranch className="w-8 h-8 text-[#F05032]" />,
      github: <Github className="w-8 h-8" />,
      vscode: <Code2 className="w-8 h-8 text-[#007ACC]" />,
      postman: <Terminal className="w-8 h-8 text-[#FF6C37]" />,
      linux: <Terminal className="w-8 h-8" />,
      figma: <PenTool className="w-8 h-8 text-[#F24E1E]" />,
      photoshop: <Image className="w-8 h-8 text-[#31A8FF]" />,
      notion: <FileText className="w-8 h-8" />,
      webpack: <Package className="w-8 h-8 text-[#8DD6F9]" />,
      babel: <Layers className="w-8 h-8 text-[#F9DC3E]" />,
      kubernetes: <BarChart className="w-8 h-8 text-[#326CE5]" />,
    }

    return iconMap[iconName] || <Code2 className="w-8 h-8" />
  }

  return (
    <motion.a
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="flex flex-col items-center group cursor-pointer"
    >
      <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-lg mb-2 hover:bg-primary/20 transition-colors duration-300">
        {getSkillIcon(skill.icon)}
      </div>
      <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">{skill.name}</span>
    </motion.a>
  )
}

