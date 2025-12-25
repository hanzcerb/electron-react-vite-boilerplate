import { useState, useEffect } from 'react'
import { useUser } from '@/ui/context/UserContext'
import { useTheme } from '@/ui/context/ThemeContext'

export default function ProfilePage() {
  const { username, setUsername } = useUser()
  const { themeColor } = useTheme()
  const [inputValue, setInputValue] = useState(username)
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    setInputValue(username)
  }, [username])

  const handleSave = () => {
    setUsername(inputValue)
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2000)
  }

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center p-8 transition-colors duration-300 ${
        themeColor === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div
        className={`w-full max-w-md rounded-2xl p-8 shadow-xl transition-colors duration-300 ${
          themeColor === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}
      >
        <h1
          className={`mb-6 text-center text-3xl font-bold ${
            themeColor === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
          Edit Profile
        </h1>

        <div className="mb-6 flex flex-col items-center">
          <div
            className={`mb-4 flex h-24 w-24 items-center justify-center rounded-full text-4xl font-bold ${
              themeColor === 'dark' ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'
            }`}
          >
            {inputValue.charAt(0).toUpperCase()}
          </div>
          <p className={`${themeColor === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            Current: {username}
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className={`mb-2 block text-sm font-medium ${
                themeColor === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={`w-full rounded-lg border px-4 py-2.5 transition duration-200 focus:ring-blue-500 ${
                themeColor === 'dark'
                  ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                  : 'border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500'
              }`}
              placeholder="Enter your username"
            />
          </div>

          <button
            onClick={handleSave}
            className={`w-full transform rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white transition duration-200 hover:scale-[1.02] focus:ring-4 focus:outline-none ${
              themeColor === 'dark'
                ? 'hover:bg-blue-700 focus:ring-blue-800'
                : 'hover:bg-blue-700 focus:ring-blue-300'
            }`}
          >
            Save Changes
          </button>

          {isSaved && (
            <div
              className={`animate-pulse rounded-lg p-3 text-center text-sm ${
                themeColor === 'dark'
                  ? 'bg-green-900/30 text-green-400'
                  : 'bg-green-100 text-green-700'
              }`}
            >
              Profile updated successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
