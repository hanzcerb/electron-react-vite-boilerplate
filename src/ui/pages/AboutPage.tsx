import {
  Zap,
  Monitor,
  Code,
  Palette,
  Box,
  Terminal,
  Cpu,
  Layout,
  ShieldCheck,
  FileCode,
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-full w-full overflow-y-auto bg-gray-50 p-8 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl dark:text-white">
            Electron React Vite Boilerplate
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            A high-performance, feature-rich foundation for building modern cross-platform desktop
            applications.
          </p>
        </section>

        {/* Tech Stack Grid */}
        <section>
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white">
            <Cpu className="text-blue-600" />
            Technology Stack
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TechCard
              icon={<Monitor className="h-6 w-6 text-cyan-500" />}
              title="Electron"
              description="Build cross-platform desktop apps with JavaScript, HTML, and CSS."
            />
            <TechCard
              icon={<Code className="h-6 w-6 text-blue-500" />}
              title="React 19"
              description="The library for web and native user interfaces."
            />
            <TechCard
              icon={<Zap className="h-6 w-6 text-yellow-500" />}
              title="Vite"
              description="Next generation frontend tooling. Instant server start and lightning fast HMR."
            />
            <TechCard
              icon={<FileCode className="h-6 w-6 text-blue-600" />}
              title="TypeScript"
              description="Typed JavaScript at any scale. Adds static type definitions."
            />
            <TechCard
              icon={<Palette className="h-6 w-6 text-teal-400" />}
              title="Tailwind CSS 4"
              description="A utility-first CSS framework for rapid UI development."
            />
            <TechCard
              icon={<Layout className="h-6 w-6 text-gray-500" />}
              title="Lucide React"
              description="Beautiful & consistent icons."
            />
          </div>
        </section>

        {/* Features Section */}
        <section>
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white">
            <ShieldCheck className="text-green-600" />
            Key Features
          </h2>
          <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
            <ul className="grid gap-4 sm:grid-cols-2">
              <FeatureItem text="Hot Module Replacement (HMR)" />
              <FeatureItem text="TypeScript Support" />
              <FeatureItem text="ESLint & Prettier Configured" />
              <FeatureItem text="React Router v7 Included" />
              <FeatureItem text="Alias Import Support (@/)" />
              <FeatureItem text="Secure Source Code (Main/Preload/Renderer separation)" />
            </ul>
          </div>
        </section>

        {/* How to Use Section */}
        <section>
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white">
            <Terminal className="text-purple-600" />
            Getting Started
          </h2>
          <div className="space-y-6">
            <div className="rounded-xl bg-gray-900 p-6 shadow-lg">
              <h3 className="mb-3 text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Development
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded bg-gray-800 px-4 py-3 font-mono text-sm text-green-400">
                  <span>npm run dev</span>
                  <span className="text-gray-500"># Starts Electron + React</span>
                </div>
                <div className="flex items-center justify-between rounded bg-gray-800 px-4 py-3 font-mono text-sm text-green-400">
                  <span>npm run dev:react</span>
                  <span className="text-gray-500"># Starts React</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gray-900 p-6 shadow-lg">
              <h3 className="mb-3 text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Production Build
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded bg-gray-800 px-4 py-3 font-mono text-sm text-blue-400">
                  <span>npm run build</span>
                  <span className="text-gray-500"># Typecheck & Build</span>
                </div>
                <div className="flex items-center justify-between rounded bg-gray-800 px-4 py-3 font-mono text-sm text-yellow-400">
                  <span>npm run dist:win</span>
                  <span className="text-gray-500"># Package for Windows</span>
                </div>
                <div className="flex items-center justify-between rounded bg-gray-800 px-4 py-3 font-mono text-sm text-yellow-400">
                  <span>npm run dist:mac</span>
                  <span className="text-gray-500"># Package for macOS</span>
                </div>
                <div className="flex items-center justify-between rounded bg-gray-800 px-4 py-3 font-mono text-sm text-yellow-400">
                  <span>npm run dist:linux</span>
                  <span className="text-gray-500"># Package for Linux</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Built with ❤️ using the Electron React Vite Boilerplate</p>
        </footer>
      </div>
    </div>
  )
}

function TechCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 inline-block rounded-lg bg-gray-50 p-3 transition-colors group-hover:bg-blue-50 dark:bg-gray-700/50 dark:group-hover:bg-blue-900/20">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
        <Box size={14} />
      </div>
      <span>{text}</span>
    </li>
  )
}
