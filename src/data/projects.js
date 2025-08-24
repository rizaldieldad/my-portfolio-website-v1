const projects = [
  {
    id: 1,
    title:
      'Company Profile Website for Lembaga Alkitab Indonesia (Indonesian Bible Institution)',
    type: 'University Internship Program',
    year: '2023',
    description: [
      'As part of my university internship program, I developed a company profile website for Indonesia Bible Institution.',
      'Responsible for re-designing and developing the website using Vue.js and Bootstrap.'
    ],
    tech: ['Vue.js', 'Bootstrap'],
    thumbnail:
      'https://placehold.co/600x400/3B82F6/ffffff?text=Company+Profile+Website',
    github: '',
    live: ''
  },
  {
    id: 2,
    title:
      'Implementation of Progressive Web Apps on Bible Distribution Data Management Website for Lembaga Alkitab Indonesia (Indonesian Bible Institution) ',
    type: 'Thesis',
    year: '2024',
    description: [
      'As part of my thesis, I developed a website for managing Bible distribution data using Laravel, Livewire, CSS, Bootstrap, and JavaScript',
      'Progressive Web Apps are implemented so that the website can be installed on all devices, have a responsive display, and can be accessed offline on certain pages.',
      'Throughout the development process, maintained communication with the Indonesia Bible Institute to ensure that the website met their needs.'
    ],
    tech: ['Laravel', 'Livewire', 'JavaScript', 'PWA', 'Bootstrap'],
    thumbnail: '/images/projects/thesis.png',
    github:
      'https://github.com/rizaldieldad/bible-distribution-management-website',
    live: 'https://sipenyebaran.my.id/'
  },
  {
    id: 3,
    title: 'Fullstack Subscription Tracker ',
    type: 'Personal Project',
    year: '2025',
    description: [
      'As part of my personal project, I developed a subscription management website allowing users to track their subscription services like Netflix, Spotify, etc and receive automated email reminders 7 days before the renewal date.',
      'Use Node.js, Express.js, MySQL, and Prisma (ORM) for efficient database operations.',
      'Focused on backend architecture, including CRUD operations, RESTful API, input validation, proper error handling, and email scheduling.',
      'Built a simple frontend using HTML, CSS, Bootstrap, and JavaScript.'
    ],
    tech: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'MySQL',
      'Prisma',
      'RESTful API'
    ],
    thumbnail: '/images/projects/fullstack-subscription-tracker.png',
    github: 'https://github.com/rizaldieldad/backend-subscription-tracker',
    live: ''
  }
]

export default projects
