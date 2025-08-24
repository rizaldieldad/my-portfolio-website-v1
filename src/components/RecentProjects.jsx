import Badge from './Badge'

import projects from '../data/projects'

function RecentProjects () {
  const latestProjects = [...projects]
    .sort((a, b) => Number(b.year) - Number(a.year))
    .slice(0, 3)

  return (
    <section className='py-8 md:py-16'>
      <h2 className='text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white'>
        My Recent Projects
      </h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {latestProjects.map(project => (
          <div className='bg-white dark:bg-zinc-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <img
              className='w-full h-48 object-cover rounded-t-xl'
              src={project.thumbnail}
              alt={project.title}
            />
            <div className='p-6'>
              <h3 className='text-lg font-semibold mb-2 text-slate-900 dark:text-white'>
                {project.title}
              </h3>
              <p className='text-slate-600 dark:text-zinc-400'>
                {project.description[0]}
              </p>
              <div className='flex flex-wrap gap-2 mt-4'>
                {project.tech.map(tech => (
                  <Badge>{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecentProjects
