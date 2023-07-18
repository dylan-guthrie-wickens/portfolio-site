import ProjectCard from '@/components/ProjectCard'
import ProjectsNavBar from '@/components/ProjectsNavBar'
import { projects as projectData } from '@/lib/data'
import { useState } from 'react'

export default function Projects() {
  const [projects, setProjects] = useState(projectData)
  const [active, setActive] = useState('All')

  const filterByCategory = (category: string) => {
    if (category === 'All') {
      setProjects(projectData)
      setActive('All')
      return
    }
    const filteredProjectData = projectData.filter((project) =>
      project.category.includes(category)
    )
    setProjects(filteredProjectData)
    setActive(category)
  }

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: '65vh' }}>
      <ProjectsNavBar filterByCategory={filterByCategory} active={active} />

      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project, i) => (
          <div
            key={`${i}-${project.name}`}
            className="col-span-12 p-2 bg-gray-200 rounded-md sm:col-span-6 lg:col-span-4 dark:bg-black"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}
