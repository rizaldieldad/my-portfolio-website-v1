import './App.css'

import { ThemeProvider } from './contexts/ThemeContext'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe'

function App () {
  return (
    <ThemeProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about-me' element={<AboutMe />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
