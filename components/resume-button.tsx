import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import type { ReactNode } from "react"

interface ResumeButtonProps {
  variant?: "default" | "outline" | "secondary"
  icon?: ReactNode
  text: string
  download?: boolean
}

export function ResumeButton({
  variant = "default",
  icon = <FileDown className="mr-2 h-5 w-5 group-hover:animate-bounce" />,
  text,
  download = false,
}: ResumeButtonProps) {
  return (
    <Button variant={variant} size="lg" className="group" asChild>
      <a
        href="/resume/muhammad-karimov-resume.pdf"
        download={download}
        target={download ? undefined : "_blank"}
        rel={download ? undefined : "noopener noreferrer"}
      >
        {icon}
        {text}
      </a>
    </Button>
  )
}

