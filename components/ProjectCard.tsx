import { Project } from '@/lib/models'
import { FunctionComponent, useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'

const ProjectCard: FunctionComponent<{ project: Project }> = ({
  project: { category, description, urls, imagePath, name, techs },
}) => {
  const [showDetail, setShowDetail] = useState(false)

  return (
    <div>
      <img
        src={imagePath}
        alt={name}
        className="rounded-md cursor-pointer"
        onClick={() => setShowDetail(true)}
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-md md:grid-cols-2 gap-x-12 dark:text-white dark:bg-black">
          <div>
            <img src={imagePath} alt={name} className="rounded-md" />

            <div className="flex justify-center my-4 space-x-3">
              {urls.map((url) => (
                <a
                  href={url.url}
                  className="flex items-center px-4 py-2 space-x-3"
                >
                  <url.Icon />
                  <span>Github</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {techs.map((tech) => (
                <span
                  className="px-2 py-1 my-1 bg-gray-200 rounded-md dark:text-black"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button className="absolute text-white bg-black rounded-full top-3 right-3 dark:text-black dark:bg-white">
            <MdClose
              size={30}
              className="cursor-pointer"
              onClick={() => setShowDetail(false)}
            />
          </button>
        </div>
      )}
    </div>
  )
}

export default ProjectCard
