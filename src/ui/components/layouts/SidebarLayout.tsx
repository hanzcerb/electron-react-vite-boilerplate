import { Outlet } from 'react-router-dom'
import { Sidebar } from '../elements/Sidebar'

export function Layout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      <Sidebar />

      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
