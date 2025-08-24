import Layout from '../components/Layout'
import CardProjectDetail from '../components/CardProjectDetail'

import projects from '../data/projects'

function Projects () {
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year)
  return (
    <Layout>
      {sortedProjects.map(project => (
        <CardProjectDetail project={project} />
      ))}
    </Layout>
  )
}

export default Projects
