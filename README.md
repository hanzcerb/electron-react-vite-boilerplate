# Electron React Vite Boilerplate

A modern, high-performance boilerplate for building desktop applications using Electron, React, Vite, and TypeScript.

## 🚀 Features

- **⚡️ Fast Development**: Powered by [Vite](https://vitejs.dev/) for instant HMR (Hot Module Replacement).
- **⚛️ React 19**: Built with the latest React version and TypeScript for type safety.
- **🎨 TailwindCSS**: Integrated with [TailwindCSS v4](https://tailwindcss.com/) for rapid UI development.
- **🖥️ Electron**: Pre-configured main process setup with [Electron](https://www.electronjs.org/).
- **📦 Distribution Ready**: configured with [electron-builder](https://www.electron.build/) for cross-platform builds (Windows, macOS, Linux).
- **🧭 Routing**: Includes `react-router-dom` with lazy loading examples.
- **🛠️ Code Quality**: ESLint and Prettier setup for consistent code style.
- **👤 Example Features**: Includes a User Profile flow using Context API and a Sidebar Layout.

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd electron-react-vite-boilerplate
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 💻 Usage

### Development

Run the development server (starts both Vite and Electron):

```bash
npm run dev
```

### Building for Production

To build the application for your OS:

```bash
# Windows
npm run dist:win

# macOS
npm run dist:mac

# Linux
npm run dist:linux
```

These commands will transpile the Electron main process, build the React app, and package everything using `electron-builder`.

### Other Commands

- **Linting**: `npm run lint`
- **Formatting**: `npm run format`
- **Preview Build**: `npm run preview`

## 📂 Project Structure

```
├── dist/             # Production build output
├── src/
│   ├── electron/     # Electron main process code
│   │   ├── main.ts   # Main entry point
│   │   └── preload.ts
│   └── ui/           # React renderer process code
│       ├── components/ # Reusable UI components
│       ├── pages/      # Page components (Welcome, About, Profile)
│       ├── features/   # Feature-specific logic
│       ├── context/    # React Context (UserContext)
│       ├── App.tsx     # Main App component with Routing
│       └── main.tsx    # React entry point
└── package.json
```

## 📝 License

Refers to the project's license file (default: ISC/MIT).
