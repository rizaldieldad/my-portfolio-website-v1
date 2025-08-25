import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa'
import Layout from '../components/Layout'

function AboutMe () {
  return (
    <Layout>
      <div className='flex flex-col md:flex-row gap-8 items-start'>
        {/* left column */}
        <div className='flex flex-col w-full md:w-1/3 lg:w-1/4 items-center md:items-start space-y-6'>
          <div className='w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-gray-600 overflow-hidden bg-gray-700 flex items-center justify-center text-sm text-gray-400'>
            <img src='/images/about_me_profile.jpg' alt='Photo Profile' />
          </div>

          <div className='flex flex-col w-full space-y-3'>
            <a
              href='#'
              className='flex flex-row items-center gap-2 hover:bg-yellow-700 hover:rounded-full hover:text-white transition-all bg-transition duration-400'
            >
              <div className='p-3 rounded-full bg-yellow-700 text-white'>
                <FaEnvelope className='w-5 h-5' />
              </div>
              <span>eldad.rizaldi@gmail.com</span>
            </a>

            <a
              href='#'
              className='flex flex-row items-center gap-2 hover:bg-teal-700 hover:rounded-full hover:text-white transition-all duration-400'
            >
              <div className='p-3 rounded-full bg-teal-700 text-white'>
                <FaPhone className='w-5 h-5' />
              </div>
              <span>(+62) 821-3640-2975 (ID)</span>
            </a>

            <a
              href='https://github.com/rizaldieldad'
              className='flex flex-row items-center gap-2 hover:bg-gray-700 hover:rounded-full hover:text-white transition-all duration-400'
            >
              <div className='p-3 rounded-full bg-gray-700 text-white'>
                <FaGithub className='w-5 h-5' />
              </div>
              <span>rizaldieldad</span>
            </a>

            <a
              href='https://www.linkedin.com/in/eldad-rizaldi-adipratama'
              className='flex flex-row items-center gap-2 hover:bg-sky-700 hover:rounded-full hover:text-white transition-all duration-400'
            >
              <div className='p-3 rounded-full bg-sky-700 text-white'>
                <FaLinkedin className='w-5 h-5' />
              </div>
              <span>Eldad Rizaldi Adipratama</span>
            </a>

            <a
              href='https://www.instagram.com/eldadrizaldi_/'
              className='flex flex-row items-center gap-2 hover:bg-pink-700 hover:rounded-full hover:text-white transition-all duration-400'
            >
              <div className='p-3 rounded-full bg-pink-700 text-white'>
                <FaInstagram className='w-5 h-5' />
              </div>
              <span>eldadrizaldi_</span>
            </a>
          </div>
        </div>

        {/* right column */}
        <div className='w-full md:w-2/3 lg:w-3/4 space-y-6'>
          <h2 className='text-3xl font-bold text-slate-900 dark:text-white'>
            Eldad Rizaldi
          </h2>
          <p className='text-slate-600 dark:text-zinc-400 leading-loose text-justify'>
            Hey there!👋 My name is Eldad, and I'm a recent computer science
            graduate who specializes in software development, particularly in
            the field of web development. As a new grad, I'm eager to keep
            learning and improving my skills. I hope to become a dependable
            person who can help lots of people, especially those in need. My
            family and close friends are my biggest source of motivation, and I
            promise to keep growing into a better person.
          </p>

          <p className='text-slate-600 dark:text-zinc-400 leading-loose text-justify'>
            I'm a huge football fan. My favorite team? Definitely Barcelona. To
            me, football is more than just a game or a match; it's an art form,
            like a beautiful poem that's a feast for the eyes. That's why I
            think playing a beautiful game is just as important as winning.
            Besides football, I also love spending time in nature, watching
            movies or TV series, and listening to music.
          </p>

          {/* spotify playlist */}
          <div className='mt-22'>
            <h2 className='text-xl font-bold text-slate-900 dark:text-white'>
              My Spotify Playlist
            </h2>
            <div className='grid md:grid-cols-2 gap-6 mt-4'>
              <iframe
                src='https://open.spotify.com/embed/playlist/1eITpr7Nz9ObBqQWK1fP8M?utm_source=generator&theme=0'
                width='100%'
                height='352'
                allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                loading='lazy'
                allowFullScreen=''
              ></iframe>
              <iframe
                data-testid='embed-iframe'
                src='https://open.spotify.com/embed/album/7ah4nkw82m0ngQwPKrgHUc?utm_source=generator&theme=0'
                width='100%'
                height='352'
                allowFullScreen=''
                allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                loading='lazy'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutMe
