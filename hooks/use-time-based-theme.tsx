"use client"

import { useEffect, useState } from "react"

export function useTimeBasedTheme() {
  const [timeBasedTheme, setTimeBasedTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    // Function to determine theme based on time
    const updateThemeByTime = () => {
      const currentHour = new Date().getHours()
      // Dark mode between 7 PM (19) and 7 AM (7)
      const isDarkTime = currentHour >= 19 || currentHour < 7
      setTimeBasedTheme(isDarkTime ? "dark" : "light")
    }

    // Initial call
    updateThemeByTime()

    // Update every hour
    const interval = setInterval(updateThemeByTime, 60 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  return timeBasedTheme
}

