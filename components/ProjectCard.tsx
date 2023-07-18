import { Project } from '@/lib/models'
import { FunctionComponent, useState } from 'react'
import { MdClose } from 'react-icons/md'
import Image from 'next/image'
import ProjectPopUp from './ProjectPopUp'

const ProjectCard: FunctionComponent<{
  project: Project
  showDetail: number | null
  setShowDetail: (id: null | number) => void
}> = ({
  project: { description, urls, imagePath, name, techs, id },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <Image
        src={imagePath}
        alt={name}
        className="border-2 rounded-md cursor-pointer border-slate-950"
        onClick={() => setShowDetail(id)}
        width="300"
        height="150"
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 rounded-md bg-slate-400 text-slate-950 md:grid-cols-2 gap-x-12 dark:text-slate-100 dark:bg-slate-950">
          <ProjectPopUp {...{ description, urls, imagePath, name, techs }} />

          <button className="absolute rounded-full bg-slate-950 text-slate-100 top-3 right-3 dark:text-slate-950 dark:bg-slate-100">
            <MdClose
              size={30}
              className="cursor-pointer"
              onClick={() => setShowDetail(null)}
            />
          </button>
        </div>
      )}
    </div>
  )
}

export default ProjectCard
