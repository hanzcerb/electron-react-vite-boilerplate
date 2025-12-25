import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Layout } from '@/ui/components/layouts/SidebarLayout'
import { UserProvider } from '@/ui/context/UserContext'
import { ThemeProvider } from '@/ui/context/ThemeContext'

const WelcomePage = lazy(() => import('@/ui/pages/WelcomePage'))
const AboutPage = lazy(() => import('@/ui/pages/AboutPage'))

const ProfilePage = lazy(() => import('@/ui/pages/ProfilePage'))

function App() {
  return (
    <Router>
      <ThemeProvider>
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
      </ThemeProvider>
    </Router>
  )
}

export default App
