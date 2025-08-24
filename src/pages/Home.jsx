import Header from '../components/Header'
import RecentProjects from '../components/RecentProjects'
import TechStacks from '../components/TechStacks'
import Layout from '../components/Layout'
import FunTerminal from '../components/FunTerminal'

function Home () {
  return (
    <Layout>
      {/* Profile Section */}
      <Header />

      {/* Recent Projects */}
      <RecentProjects />

      {/* Tech Stacks */}
      <TechStacks />

      {/* Fun Terminal */}
      <FunTerminal />
    </Layout>
  )
}

export default Home
