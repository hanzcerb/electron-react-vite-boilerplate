import { useState } from 'react'
import reactLogo from '../assets/icons/react.svg'
import viteLogo from '../assets/icons/vite.svg'
import electronLogo from '../assets/icons/electron.svg'
import tailwindLogo from '../assets/icons/tailwindcss.svg'

export default function WelcomePage() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-full w-full">
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
        <h1 className="text-center text-3xl font-semibold">Electron + Vite + React + Tailwind</h1>
        {/* <text className="text-3xl font-bold underline">Hello this using Tailwind Styling</text> */}
        <div className="card text-center">
          <button
            className="cursor-pointer rounded-lg bg-[#1a1a1a] px-4 py-2 font-bold text-white transition-all duration-300 hover:ring hover:ring-violet-500"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="mt-4 text-center">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs text-center">Click on the logos to learn more</p>
      </div>
    </div>
  )
}
