import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Layout } from './components/layouts/SidebarLayout'
import { UserProvider } from './context/UserContext'

const WelcomePage = lazy(() => import('./pages/WelcomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))

const ProfilePage = lazy(() => import('./pages/ProfilePage'))

function App() {
  return (
    <Router>
      <UserProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<WelcomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </Suspense>
      </UserProvider>
    </Router>
  )
}

export default App
