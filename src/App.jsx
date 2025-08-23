import './App.css'

import { ThemeProvider } from './contexts/ThemeContext'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'

function App () {
  return (
    <ThemeProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
