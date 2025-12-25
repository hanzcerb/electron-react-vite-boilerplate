import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Info, User, ChevronRight, ChevronLeft, Moon, Sun, Monitor } from 'lucide-react'
import desktopIcon from '@/ui/assets/images/desktopIcon.png'
import { useUser } from '@/ui/context/UserContext'
import { useTheme } from '@/ui/context/ThemeContext'

export function Sidebar() {
  const { username } = useUser()
  const { themePreference, setThemePreference, themeColor } = useTheme()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Info },
  ]

  return (
    <aside
      className={`relative flex h-full flex-col justify-between border-r shadow-sm transition-all duration-300 ${
        themeColor === 'dark' ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'
      } ${isCollapsed ? 'w-20' : 'w-64'}`}
    >
      {/* Collapse Toggle Button - Floating */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`absolute top-9 -right-3 z-10 flex h-6 w-6 items-center justify-center rounded-full border shadow-sm ${
          themeColor === 'dark'
            ? 'border-gray-700 bg-gray-800 text-gray-400 hover:text-blue-400'
            : 'border-gray-200 bg-white text-gray-500 hover:text-blue-600'
        }`}
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
                <span
                  className={`text-lg font-bold tracking-tight ${
                    themeColor === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Electron
                </span>
                <span
                  className={`text-xs font-medium ${
                    themeColor === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
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
                    ? themeColor === 'dark'
                      ? 'bg-blue-900/20 text-blue-400'
                      : 'bg-blue-50 text-blue-600'
                    : themeColor === 'dark'
                      ? 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                } ${isCollapsed ? 'justify-center' : ''}`}
              >
                <item.icon
                  size={20}
                  className={`shrink-0 transition-colors ${
                    isActive
                      ? themeColor === 'dark'
                        ? 'text-blue-400'
                        : 'text-blue-600'
                      : themeColor === 'dark'
                        ? 'text-gray-500 group-hover:text-gray-300'
                        : 'text-gray-400 group-hover:text-gray-600'
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

        {/* User Bottom Section */}
        <div
          className={`space-y-5 border-t p-4 ${
            themeColor === 'dark' ? 'border-gray-800' : 'border-gray-300'
          }`}
        >
          {/* Toggle between Light mode, Dark mode, and System mode */}
          <div
            className={`${isCollapsed ? 'flex flex-col' : 'flex'} items-center justify-center gap-5`}
          >
            {[
              { icon: Sun, label: 'Light Mode', value: 'light' },
              { icon: Monitor, label: 'System Mode', value: 'system' },
              { icon: Moon, label: 'Dark Mode', value: 'dark' },
            ].map(({ icon: Icon, label, value }) => {
              const isSelected = themePreference === value
              return (
                <div key={label} className="group relative flex items-center justify-center">
                  <button
                    onClick={() => setThemePreference(value as any)}
                    className={`cursor-pointer rounded-lg p-1 transition-all ${
                      isSelected
                        ? themeColor === 'dark'
                          ? 'bg-blue-900/30 text-blue-400'
                          : 'bg-blue-100 text-blue-600'
                        : themeColor === 'dark'
                          ? 'text-gray-400 hover:bg-gray-800 hover:text-white'
                          : 'text-gray-400 hover:bg-gray-100 hover:text-slate-800'
                    }`}
                  >
                    <Icon size={20} />
                  </button>
                  <span
                    className={`pointer-events-none absolute bottom-full mb-2 scale-0 rounded px-2 py-1 text-xs font-medium whitespace-nowrap text-white transition-all group-hover:scale-100 ${
                      themeColor === 'dark' ? 'bg-gray-700' : 'bg-gray-900'
                    }`}
                  >
                    {label}
                  </span>
                </div>
              )
            })}
          </div>

          {/* User Profile Section */}
          <Link
            to="/profile"
            className={`group flex items-center gap-3 rounded-xl p-2 transition-colors ${
              themeColor === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
            } ${isCollapsed ? 'justify-center' : ''} ${
              location.pathname === '/profile'
                ? themeColor === 'dark'
                  ? 'bg-gray-800'
                  : 'bg-gray-50'
                : ''
            }`}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-2 ${
                themeColor === 'dark' ? 'bg-gray-700 ring-gray-900' : 'bg-gray-100 ring-white'
              }`}
            >
              <User
                size={20}
                className={themeColor === 'dark' ? 'text-gray-300' : 'text-gray-500'}
              />
            </div>

            {!isCollapsed && (
              <div className="flex flex-1 flex-col overflow-hidden">
                <span
                  className={`truncate text-sm font-semibold ${
                    themeColor === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {username}
                </span>
                <span
                  className={`truncate text-xs ${
                    themeColor === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
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
