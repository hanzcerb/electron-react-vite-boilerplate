import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Layout } from './components/layout/Layout'

const WelcomePage = lazy(() => import('./pages/WelcomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
