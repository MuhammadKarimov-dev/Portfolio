import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

interface SocialIconProps {
  href: string
  icon: ReactNode
  label: string
}

export function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
      asChild
    >
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        {icon}
      </a>
    </Button>
  )
}

