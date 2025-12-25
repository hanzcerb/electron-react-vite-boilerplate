import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type ThemePreference = 'light' | 'dark' | 'system'
type ThemeColor = 'light' | 'dark'

interface ThemeContextType {
  themePreference: ThemePreference
  setThemePreference: (theme: ThemePreference) => void
  themeColor: ThemeColor
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themePreference, setThemePreference] = useState<ThemePreference>(() => {
    const savedTheme = localStorage.getItem('themePreference')
    return (savedTheme as ThemePreference) || 'system'
  })

  // themeColor is derived state, we can use state to track it for easier consumption
  const [themeColor, setThemeColor] = useState<ThemeColor>('light')

  useEffect(() => {
    const root = window.document.documentElement

    // Function to determine actual theme
    const getSystemTheme = (): ThemeColor => {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    const applyTheme = () => {
      let activeTheme: ThemeColor

      if (themePreference === 'system') {
        activeTheme = getSystemTheme()
      } else {
        activeTheme = themePreference
      }

      setThemeColor(activeTheme)

      // Update HTML class for Tailwind dark mode
      root.classList.remove('light', 'dark')
      root.classList.add(activeTheme)
    }

    applyTheme()

    // Listen for system changes if in system mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (themePreference === 'system') {
        applyTheme()
      }
    }

    mediaQuery.addEventListener('change', handleChange)

    // Persist preference
    localStorage.setItem('themePreference', themePreference)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [themePreference])

  const value = {
    themePreference,
    setThemePreference,
    themeColor,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
