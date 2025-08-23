import Navbar from '../components/Navbar'
import Header from '../components/Header'
import RecentProjects from '../components/RecentProjects'
import TechStacks from '../components/TechStacks'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

import { useThemeContext } from '../contexts/ThemeContext'

function Home () {
  return (
    <Layout>
      {/* Profile Section */}
      <Header />

      {/* Recent Projects */}
      <RecentProjects />

      {/* Tech Stacks */}
      <TechStacks />
    </Layout>
  )
}

export default Home
