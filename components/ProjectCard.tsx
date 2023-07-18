import { Project } from '@/lib/models'
import { FunctionComponent, useState } from 'react'
import { MdClose } from 'react-icons/md'
import Image from 'next/image'
import ProjectPopUp from './ProjectPopUp'

const ProjectCard: FunctionComponent<{ project: Project }> = (props) => {
  const [showDetail, setShowDetail] = useState(false)

  return (
    <div>
      <Image
        src={props.project.imagePath}
        alt={props.project.name}
        className="rounded-md cursor-pointer"
        onClick={() => setShowDetail(true)}
        width="300"
        height="150"
        layout="responsive"
      />
      <p className="my-2 text-center">{props.project.name}</p>

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-md md:grid-cols-2 gap-x-12 dark:text-white dark:bg-black">
          <ProjectPopUp project={props.project} />

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
