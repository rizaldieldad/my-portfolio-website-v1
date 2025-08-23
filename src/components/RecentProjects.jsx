import Badge from './Badge'

function RecentProjects () {
  return (
    <section className='py-8 md:py-16'>
      <h2 className='text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white'>
        My Recent Projects
      </h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
        <div className='bg-white dark:bg-zinc-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1'>
          <img
            className='w-full h-48 object-cover rounded-t-xl'
            src='https://placehold.co/600x400/3B82F6/ffffff?text=Project+1'
            alt='Project 1'
            onError={e => {
              e.target.src =
                'https://placehold.co/600x400/3B82F6/ffffff?text=Project+Image'
            }}
          />
          <div className='p-6'>
            <h3 className='text-lg font-semibold mb-2 text-slate-900 dark:text-white'>
              Project 1
            </h3>
            <p className='text-slate-600 dark:text-zinc-400'>
              A brief project description. This card is hoverable and
              responsive.
            </p>
            <div className='flex flex-wrap gap-2 mt-4'>
              <Badge>HTML</Badge>
              <Badge>CSS</Badge>
              <Badge>JavaScript</Badge>
            </div>
          </div>
        </div>
        <div className='bg-white dark:bg-zinc-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1'>
          <img
            className='w-full h-48 object-cover rounded-t-xl'
            src='https://placehold.co/600x400/3B82F6/ffffff?text=Project+2'
            alt='Project 2'
            onError={e => {
              e.target.src =
                'https://placehold.co/600x400/3B82F6/ffffff?text=Project+Image'
            }}
          />
          <div className='p-6'>
            <h3 className='text-lg font-semibold mb-2 text-slate-900 dark:text-white'>
              Project 2
            </h3>
            <p className='text-slate-600 dark:text-zinc-400'>
              A brief project description. This card is hoverable and
              responsive.
            </p>
            <div className='flex flex-wrap gap-2 mt-4'>
              <Badge>HTML</Badge>
              <Badge>CSS</Badge>
              <Badge>JavaScript</Badge>
            </div>
          </div>
        </div>
        <div className='bg-white dark:bg-zinc-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1'>
          <img
            className='w-full h-48 object-cover rounded-t-xl'
            src='https://placehold.co/600x400/3B82F6/ffffff?text=Project+3'
            alt='Project 3'
            onError={e => {
              e.target.src =
                'https://placehold.co/600x400/3B82F6/ffffff?text=Project+Image'
            }}
          />
          <div className='p-6'>
            <h3 className='text-lg font-semibold mb-2 text-slate-900 dark:text-white'>
              Project 2
            </h3>
            <p className='text-slate-600 dark:text-zinc-400'>
              A brief project description. This card is hoverable and
              responsive.
            </p>
            <div className='flex flex-wrap gap-2 mt-4'>
              <Badge>HTML</Badge>
              <Badge>CSS</Badge>
              <Badge>JavaScript</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentProjects
