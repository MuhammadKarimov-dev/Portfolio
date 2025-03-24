"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useTimeBasedTheme } from "@/hooks/use-time-based-theme"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const timeBasedTheme = useTimeBasedTheme()

  return (
    <NextThemesProvider
      {...props}
      defaultTheme={timeBasedTheme}
      enableSystem={false} // Disable system preference to use our time-based default
    >
      {children}
    </NextThemesProvider>
  )
}

