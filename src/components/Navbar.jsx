import { useThemeContext } from '../contexts/ThemeContext'

function Navbar () {
  const { darkMode, toggleDarkMode } = useThemeContext()
  const handleToggle = () => {
    toggleDarkMode()
  }

  return (
    <div className='bg-white dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 shadow-md rounded-xl flex justify-between items-center px-4 py-2 md:py-4 mb-8 transition-colors duration-500'>
      <nav className='flex mx-auto items-center gap-4 sm:gap-8 text-sm sm:text-base font-medium'>
        <a
          href='#'
          className='hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200'
        >
          Home
        </a>
        <a
          href='#'
          className='hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200'
        >
          Projects
        </a>
        <a
          href='#'
          className='hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200'
        >
          About Me
        </a>
      </nav>
      <button
        className='p-2 rounded-full border-2 border-slate-300 dark:border-zinc-700 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors duration-200'
        onClick={handleToggle}
      >
        {darkMode ? '🌞' : '🌜'}
      </button>
    </div>
  )
}

export default Navbar
