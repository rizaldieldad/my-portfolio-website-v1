import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { IoDocumentText } from 'react-icons/io5'

function Header () {
  return (
    <section className='grid md:grid-cols-2 items-center gap-8 py-8 md:py-16'>
      {/* Profile image */}
      <div className='flex justify-center md:justify-end md:me-16'>
        <div className='w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-sky-600 dark:border-sky-400 shadow-xl'>
          <img
            src='/images/alternative_profile.jpg'
            alt='Photo Profile'
            className='w-full h-full object-cover object-top'
          />
        </div>
      </div>

      {/* Bio */}
      <div className='flex flex-col items-center text-center md:items-start md:text-left gap-4'>
        <h1 className='text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white'>
          Hello, I'm Eldad 👋
        </h1>
        <p className='text-lg sm:text-xl text-slate-600 dark:text-zinc-400 max-w-lg'>
          Computer Science fresh graduate with a strong passion for
          <span className='font-bold text-sky-600 dark:text-sky-400'>
            {' '}
            software developer
          </span>{' '}
          and a keen interest in learning new technologies.
        </p>

        {/* Social media links */}
        <div className='flex flex-row gap-4 mt-4'>
          {/* old icons design */}
          {/* <a
            href='#'
            className='text-slate-500 dark:text-zinc-400 hover:text-slate-600 dark:hover:text-slate-700 transition-colors duration-200'
          >
            <FaGithub className='w-5 h-5' />
          </a>
          <a
            href='#'
            className='text-slate-500 dark:text-zinc-400 hover:text-sky-600 hover:dark:text-sky-700 transition-colors duration-200'
          >
            <FaLinkedin className='w-5 h-5' />
          </a>
          <a
            href='#'
            className='text-slate-500 dark:text-zinc-400  dark:hover:text-pink-700 transition-colors duration-200'
          >
            <FaInstagram className='w-5 h-5' />
          </a>
          <a
            href='#'
            className='text-slate-500 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-700 transition-colors duration-200'
          >
            <IoDocumentText className='w-5 h-5' />
          </a> */}

          {/* github */}
          <a
            href='https://github.com/rizaldieldad'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center group overflow-hidden text-slate-500 dark:text-zinc-400 hover:text-slate-600 dark:hover:text-slate-700 transition-colors duration-200'
          >
            {/* Icon */}
            <span className='text-2xl'>
              <FaGithub className='w-5 h-5' />
            </span>

            {/* Text that pushes icons */}
            <span className='ml-2 text-sm text-zinc-900 font-medium dark:text-white max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap'>
              Github
            </span>
          </a>

          {/* linkedin */}
          <a
            href='https://www.linkedin.com/in/eldad-rizaldi-adipratama/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center group overflow-hidden text-slate-500 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-700 transition-colors duration-200'
          >
            {/* Icon */}
            <span className='text-2xl'>
              <FaLinkedin className='w-5 h-5' />
            </span>

            {/* Text that pushes icons */}
            <span className='ml-2 text-sm font-medium text-zinc-900 dark:text-white max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap'>
              LinkedIn
            </span>
          </a>

          {/* instagram */}
          <a
            href='https://www.instagram.com/e.r.adipratama/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center group overflow-hidden text-slate-500 dark:text-zinc-400 hover:text-pink-600 dark:hover:text-pink-700 transition-colors duration-200'
          >
            {/* Icon */}
            <span className='text-2xl'>
              <FaInstagram className='w-5 h-5' />
            </span>

            {/* Text that pushes icons */}
            <span className='ml-2 text-sm font-medium text-zinc-900 dark:text-white max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap'>
              Instagram
            </span>
          </a>

          {/* cv */}
          <a
            href='/documents/cv.pdf'
            download='Eldad_CV.pdf'
            rel='noopener noreferrer'
            className='flex items-center group overflow-hidden text-slate-500 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-700 transition-colors duration-200'
          >
            {/* Icon */}
            <span className='text-2xl'>
              <IoDocumentText className='w-5 h-5' />
            </span>

            {/* Text that pushes icons */}
            <span className='ml-2 text-sm font-medium text-zinc-900 dark:text-white max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap'>
              CV
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Header
