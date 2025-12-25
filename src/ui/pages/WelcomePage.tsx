import { useState } from 'react'
import { useTheme } from '@/ui/context/ThemeContext'
import reactLogo from '@/ui/assets/icons/react.svg'
import viteLogo from '@/ui/assets/icons/vite.svg'
import electronLogo from '@/ui/assets/icons/electron.svg'
import tailwindLogo from '@/ui/assets/icons/tailwindcss.svg'

export default function WelcomePage() {
  const [count, setCount] = useState(0)
  const { themeColor } = useTheme()

  return (
    <div
      className={`h-full w-full transition-colors duration-300 ${
        themeColor === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-10">
        <div className="flex justify-center gap-16">
          <a href="https://electronjs.org" target="_blank">
            <img
              src={electronLogo}
              className="react h-32 w-32 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_2em] hover:drop-shadow-green-500"
              alt="Electron logo"
            />
          </a>
          <a href="https://vite.dev" target="_blank">
            <img
              src={viteLogo}
              className="h-32 w-32 animate-[spin_10s_linear_infinite] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_2em] hover:drop-shadow-indigo-500"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="h-32 w-32 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_2em] hover:drop-shadow-sky-500"
              alt="React logo"
            />
          </a>
          <a href="https://tailwindcss.com" target="_blank">
            <img
              src={tailwindLogo}
              className="h-32 w-32 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_2em] hover:drop-shadow-fuchsia-500"
              alt="Tailwind logo"
            />
          </a>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-3xl font-semibold">Electron + Vite + React + Tailwind</h1>
          <div className="space-y-4 text-center">
            <button
              className={`cursor-pointer rounded-lg px-4 py-2 font-bold transition-all duration-300 hover:ring hover:ring-violet-500 ${
                themeColor === 'dark' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'
              }`}
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </button>
            <p
              className={`text-center ${themeColor === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
            >
              Edit <code>src/ui/pages/WelcomePage.tsx</code> and save to test HMR
            </p>
          </div>
          <p className={`text-center ${themeColor === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
            Click on the logos to learn more
          </p>
        </div>
      </div>
    </div>
  )
}
