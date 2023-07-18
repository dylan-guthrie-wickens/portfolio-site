import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/data'

export default function Projects() {
  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: '65vh' }}>
      <nav>Navbar</nav>

      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <div className="col-span-12 p-2 bg-gray-200 rounded-md sm:col-span-6 lg:col-span-4 dark:bg-black">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}
