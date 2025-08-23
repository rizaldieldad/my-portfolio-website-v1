function TechStacks () {
  return (
    <section className='py-8 md:py-16'>
      <h2 className='text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white'>
        Tech I Use
      </h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-3'>
        <div className='flex flex-row gap-2 items-center border-2 border-slate-200 dark:border-zinc-700 dark:bg-zinc-800 rounded-md p-4 hover:scale-105 transition-transform duration-300'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
            alt='HTML'
            className='w-8 h-8'
          />
          <span className='text-slate-600 dark:text-zinc-400 font-medium'>
            HTML
          </span>
        </div>
        <div className='flex flex-row gap-2 items-center border-2 border-slate-200 dark:border-zinc-700 dark:bg-zinc-800 rounded-md p-4 hover:scale-105 transition-transform duration-300'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
            alt='CSS'
            className='w-8 h-8'
          />
          <span className='text-slate-600 dark:text-zinc-400 font-medium'>
            CSS
          </span>
        </div>
        <div className='flex flex-row gap-2 items-center border-2 border-slate-200 dark:border-zinc-700 dark:bg-zinc-800 rounded-md p-4 hover:scale-105 transition-transform duration-300'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
            alt='JavaScript'
            className='w-8 h-8'
          />
          <span className='text-slate-600 dark:text-zinc-400 font-medium'>
            JavaScript
          </span>
        </div>
        <div className='flex flex-row gap-2 items-center border-2 border-slate-200 dark:border-zinc-700 dark:bg-zinc-800 rounded-md p-4 hover:scale-105 transition-transform duration-300'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
            alt='React'
            className='w-8 h-8'
          />
          <span className='text-slate-600 dark:text-zinc-400 font-medium'>
            React
          </span>
        </div>
      </div>
    </section>
  )
}

export default TechStacks
