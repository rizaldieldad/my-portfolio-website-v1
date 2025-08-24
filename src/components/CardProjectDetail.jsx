function CardProjectDetail ({ project }) {
  return (
    <div className='flex flex-col md:flex-row gap-8 bg-white dark:bg-zinc-800 mb-8 p-8 rounded-xl shadow-sm shadow-gray-400 dark:shadow-none transition-colors duration-200'>
      <div className='w-full md:w-1/2'>
        <img
          src={project.thumbnail}
          alt={project.title}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='w-full md:w-1/2'>
        <div className='space-y-4'>
          <h1 className='text-3xl sm:text-4xl font-extrabold text-zinc-800 dark:text-white'>
            {project.title}
          </h1>
          {project.description.map((paragraph, index) => (
            <p key={index} className='text-lg text-zinc-600 dark:text-zinc-400'>
              {paragraph}
            </p>
          ))}

          <div className='flex flex-wrap gap-2 pt-4'>
            {project.tech.map(tech => (
              <span className='bg-gray-700 text-gray-300 text-sm font-semibold px-3 py-1 rounded-full'>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className='mt-8 flex flex-col sm:flex-row gap-4'>
          {project.live && (
            <a
              href={project.live}
              target='_blank'
              className='flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md'
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target='_blank'
              className='flex-1 text-center bg-gray-700 hover:bg-gray-600 text-gray-200 hover:text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md'
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default CardProjectDetail
