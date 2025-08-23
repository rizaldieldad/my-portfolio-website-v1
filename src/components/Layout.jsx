import { useThemeContext } from '../contexts/ThemeContext'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout ({ children }) {
  const { darkMode } = useThemeContext()

  return (
    <div
      className={`min-h-screen ${
        darkMode ? 'bg-zinc-900 text-zinc-200' : 'bg-slate-50 text-slate-800'
      } font-sans transition`}
    >
      <div className='max-w-7xl mx-auto p-4 sm:p-8'>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
