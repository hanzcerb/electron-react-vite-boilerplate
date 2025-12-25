import { useState, useEffect } from 'react'
import { useUser } from '../context/UserContext'

export default function ProfilePage() {
  const { username, setUsername } = useUser()
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
    <div className="flex h-full w-full flex-col items-center justify-center p-8">
      <div className="w-full max-w-md rounded-2xl bg-gray-800 p-8 shadow-xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">Edit Profile</h1>

        <div className="mb-6 flex flex-col items-center">
          <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-4xl font-bold text-blue-600 dark:bg-blue-900 dark:text-blue-300">
            {inputValue.charAt(0).toUpperCase()}
          </div>
          <p className="text-gray-500 dark:text-gray-400">Current: {username}</p>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 transition duration-200 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full transform rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white transition duration-200 hover:scale-[1.02] hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save Changes
          </button>

          {isSaved && (
            <div className="animate-pulse rounded-lg bg-green-100 p-3 text-center text-sm text-green-700 dark:bg-green-900/30 dark:text-green-400">
              Profile updated successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
