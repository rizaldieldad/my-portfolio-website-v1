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
            Profile Pic
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
            Halo👋 ~ Perkenalkan saya Eldad seorang lulusan baru computer
            science yang fokus pada pengembangan software khususnya dalam bidang
            web development. Sebagai seorang lulusan baru, saya ingin terus
            belajar untuk meningkatkan kualitas diri. Dengan harapan saya bisa
            menjadi seorang yang dapat diandalkan dan membantu banyak orang,
            khususnya yang membutuhkan. Keluarga dan orang-orang terdekat saya
            adalah sumber semangat saya. Saya berjanji akan terus berkembang
            menjadi pribadi yang lebih baik.
          </p>

          <p className='text-slate-600 dark:text-zinc-400 leading-loose text-justify'>
            Saya sangat suka sepak bola. Tim favorit saya? sudah jelas
            Barcelona. Bagi saya sepak bola bukan sekedar permainan atau
            pertanding, sepak bola adalah seni, seperti puisi yang indah yang
            memanjakan mata. Oleh karena itu menurut saya permainan sepak bola
            yang indah sama pentingnya dengan kemenangan. Selain sepak bola,
            saya juga sangat suka menghabiskan waktu dengan pergi ke alam,
            menontol film / series, dan mendengarkan musik.
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
              ></iframe>
              <iframe
                data-testid='embed-iframe'
                src='https://open.spotify.com/embed/album/7ah4nkw82m0ngQwPKrgHUc?utm_source=generator&theme=0'
                width='100%'
                height='352'
                allowfullscreen=''
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
