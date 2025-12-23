import { Link, Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div>
      {/* <nav className="p-4 bg-gray-800">
        <Link to="/" className="mr-4 text-white">Home</Link>
        <Link to="/about" className="text-white">About</Link>
      </nav>
       */}
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  )
}
