import Navbar from '../components/Navbar'
import Header from '../components/Header'
import RecentProjects from '../components/RecentProjects'
import TechStacks from '../components/TechStacks'
import Footer from '../components/Footer'

import { useThemeContext } from '../contexts/ThemeContext'

function Home () {
  const { darkMode } = useThemeContext()

  return (
    <div
      className={`min-h-screen ${
        darkMode ? 'bg-zinc-900 text-zinc-200' : 'bg-slate-50 text-slate-800'
      } font-sans transition-colors duration-500`}
    >
      <div className='max-w-7xl mx-auto p-4 sm:p-8'>
        {/* Navbar */}
        <Navbar />

        {/* Profile Section */}
        <Header />

        {/* Recent Projects */}
        <RecentProjects />

        {/* Tech Stacks */}
        <TechStacks />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default Home
