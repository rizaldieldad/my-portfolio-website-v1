function TechStacks () {
  // html, css, js, php, laravel, nodejs, expressjs, react, python, mysql, mongodb, livewire, bootstrap, tailwind, github, postman, figma, docker
  const techs = [
    {
      name: 'HTML',
      image: '/images/techs/html5.svg',
      color: '#e34f26'
    },
    {
      name: 'CSS',
      image: '/images/techs/css.svg',
      color: '#1572b6'
    },
    {
      name: 'JavaScript',
      image: '/images/techs/javascript.svg',
      color: '#f7df1e'
    },
    {
      name: 'PHP',
      image: '/images/techs/php.svg',
      color: '#777bb3'
    },
    {
      name: 'Laravel',
      image: '/images/techs/laravel.svg',
      color: '#ff2d20'
    },
    {
      name: 'Node.js',
      image: '/images/techs/nodedotjs.svg',
      color: '#3c873a'
    },
    {
      name: 'Express.js',
      image: '/images/techs/express.svg',
      color: '#000000'
    },
    {
      name: 'React',
      image: '/images/techs/react.svg',
      color: '#61dafb'
    },
    {
      name: 'Python',
      image: '/images/techs/python.svg',
      color: '#3776ab'
    },
    {
      name: 'MySQL',
      image: '/images/techs/mysql.svg',
      color: '#4479a1'
    },
    {
      name: 'MongoDB',
      image: '/images/techs/mongodb.svg',
      color: '#47a248'
    },
    {
      name: 'Bootstrap',
      image: '/images/techs/bootstrap.svg',
      color: '#7952b3'
    },
    {
      name: 'Tailwind CSS',
      image: '/images/techs/tailwindcss.svg',
      color: '#38b2ac'
    },
    {
      name: 'Github',
      image: '/images/techs/github.svg',
      color: '#000000'
    },
    {
      name: 'Postman',
      image: '/images/techs/postman.svg',
      color: '#ff6c37'
    },
    {
      name: 'Figma',
      image: '/images/techs/figma.svg',
      color: '#f24e1e'
    },
    {
      name: 'Docker',
      image: '/images/techs/docker.svg',
      color: '#2496ed'
    }
  ]

  return (
    <section className='py-8 md:py-16'>
      <h2 className='text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white'>
        Tech I Use
      </h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-3'>
        {techs.map(tech => (
          <div
            key={tech.name}
            className='flex flex-row gap-2 items-center border-2 border-slate-200 dark:border-zinc-700 dark:bg-zinc-800 rounded-md p-4 hover:scale-105 transition-transform duration-300'
          >
            <img src={tech.image} alt='HTML' className='w-8 h-8' />
            <span className='text-slate-600 dark:text-zinc-400 font-medium'>
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStacks
