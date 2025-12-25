import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Home, Info, User, ChevronRight, ChevronLeft } from 'lucide-react'
import desktopIcon from '../../assets/images/desktopIcon.png'
import { useUser } from '../../context/UserContext'

export function Sidebar() {
  const { username } = useUser()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Info },
  ]

  return (
    <aside
      className={`relative flex h-full flex-col justify-between border-r border-gray-200 bg-white shadow-sm transition-all duration-300 dark:border-gray-800 dark:bg-gray-900 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Collapse Toggle Button - Floating */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-9 -right-3 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-blue-400"
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      <div className="flex h-full flex-col overflow-hidden">
        {/* Header Section */}
        <div className={`flex items-center p-6 ${isCollapsed ? 'justify-center px-0' : ''}`}>
          <Link to="/" className="flex items-center gap-3 overflow-hidden">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/20">
              <img
                src={desktopIcon}
                alt="Logo"
                className="h-6 w-6 object-contain brightness-0 invert"
              />
            </div>

            {!isCollapsed && (
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Electron
                </span>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                  Boilerplate
                </span>
              </div>
            )}
          </Link>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`group flex items-center rounded-lg px-3 py-2.5 transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'
                } ${isCollapsed ? 'justify-center' : ''}`}
              >
                <item.icon
                  size={20}
                  className={`shrink-0 transition-colors ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300'
                  }`}
                />
                {!isCollapsed && <span className="ml-3 text-sm font-medium">{item.label}</span>}

                {/* Active Indicator Line */}
                {!isCollapsed && isActive && (
                  <div className="absolute right-0 h-8 w-1 rounded-l-full bg-blue-600" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* User Profile Section */}
        <div className="border-t border-gray-100 p-4 dark:border-gray-800">
          <Link
            to="/profile"
            className={`group flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 ${
              isCollapsed ? 'justify-center' : ''
            } ${location.pathname === '/profile' ? 'bg-gray-50 dark:bg-gray-800' : ''}`}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white dark:bg-gray-700 dark:ring-gray-900">
              <User size={20} className="text-gray-500 dark:text-gray-300" />
            </div>

            {!isCollapsed && (
              <div className="flex flex-1 flex-col overflow-hidden">
                <span className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                  {username}
                </span>
                <span className="truncate text-xs text-gray-500 dark:text-gray-400">
                  View Profile
                </span>
              </div>
            )}
          </Link>
        </div>
      </div>
    </aside>
  )
}
