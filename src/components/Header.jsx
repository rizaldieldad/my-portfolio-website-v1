import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { IoDocumentText } from 'react-icons/io5'

function Header () {
  return (
    <section className='grid md:grid-cols-2 items-center gap-8 py-8 md:py-16'>
      <div className='flex justify-center md:justify-end md:me-16'>
        <div className='w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-sky-600 dark:border-sky-400 shadow-xl'>
          <img
            src='https://placehold.co/256x256/E5E7EB/1F2937?text=Eldad'
            alt='Profile'
            className='w-full h-full object-cover'
            onError={e => {
              e.target.src =
                'https://placehold.co/256x256/E5E7EB/1F2937?text=Profile'
            }}
          />
        </div>
      </div>
      <div className='flex flex-col items-center text-center md:items-start md:text-left gap-4'>
        <h1 className='text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white'>
          Eldad Rizaldi
        </h1>
        <p className='text-lg sm:text-xl text-slate-600 dark:text-zinc-400 max-w-lg'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          pariatur delectus, mollitia autem adipisci accusantium.
        </p>
        <div className='flex flex-row gap-4 mt-4'>
          <a
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
            className='text-slate-500 dark:text-zink-400 hover:text-green-600 dark:hover:hover:text-green-700 transition-colors duration-200'
          >
            <IoDocumentText className='w-5 h-5' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Header
