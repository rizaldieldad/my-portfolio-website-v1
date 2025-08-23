function CardProjectDetail () {
  return (
    <div className='flex flex-col md:flex-row gap-8 bg-white dark:bg-zinc-800 mb-8 p-8 rounded-xl shadow-sm shadow-gray-400 dark:shadow-none transition-colors duration-200'>
      <div className='w-full md:w-1/2'>
        <img
          src='https://placehold.co/600x400'
          alt='Profile'
          className='w-full h-full object-cover'
          onError={e => {
            e.target.src =
              'https://placehold.co/50x50/E5E7EB/1F2937?text=Project+Image'
          }}
        />
      </div>
      <div className='w-full md:w-1/2'>
        <div className='space-y-4'>
          <h1 className='text-3xl sm:text-4xl font-extrabold text-zinc-800 dark:text-white'>
            Project Title
          </h1>
          <p className='text-gray-400 text-base sm:text-lg leading-relaxed'>
            A brief yet detailed description of the project. Explain the key
            features, the technology stack used, and the problem it aims to
            solve. This is your chance to tell the full story of the project,
            including any challenges you overcame and the lessons you learned.
          </p>

          <div className='flex flex-wrap gap-2 pt-4'>
            <span className='bg-gray-700 text-gray-300 text-sm font-semibold px-3 py-1 rounded-full'>
              HTML
            </span>
            <span className='bg-gray-700 text-gray-300 text-sm font-semibold px-3 py-1 rounded-full'>
              CSS
            </span>
            <span className='bg-gray-700 text-gray-300 text-sm font-semibold px-3 py-1 rounded-full'>
              JavaScript
            </span>
            <span className='bg-gray-700 text-gray-300 text-sm font-semibold px-3 py-1 rounded-full'>
              Tailwind CSS
            </span>
          </div>
        </div>
        <div className='mt-8 flex flex-col sm:flex-row gap-4'>
          <a
            href='#'
            className='flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md'
          >
            Live Demo
          </a>
          <a
            href='#'
            className='flex-1 text-center bg-gray-700 hover:bg-gray-600 text-gray-200 hover:text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md'
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardProjectDetail
